from flask import Flask, render_template, request, redirect, url_for
import os
import json
# from dotenv import load_dotenv
from oauth2client.service_account import ServiceAccountCredentials
import gspread
import numpy as np
from datetime import datetime

app = Flask(__name__)

# Load environment variables from .env file
# load_dotenv()
os.environ["GOOGLE_CREDENTIALS"]="credentials.json"


# Read the credentials from the environment variable
credentials_json = os.getenv("GOOGLE_CREDENTIALS")
if credentials_json:
    with open(credentials_json, 'r') as j: 
        credentials_dict = json.loads(j.read())
        credential = ServiceAccountCredentials.from_json_keyfile_dict(credentials_dict, ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'])
        client = gspread.authorize(credential)
        try:
            sheet = client.open_by_key("1UfYOsQONhRGB-fyR81VWoaicpUZHkmGjfBwn4K-iBo0")
        except gspread.SpreadsheetNotFound:
            print("Spreadsheet not found. Check if the key is correct and the sheet is shared with the service account.")
            raise
else:
    raise ValueError("GOOGLE_CREDENTIALS environment variable is not set")

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/create_sheet", methods=["POST"])
def create_sheet():
    user_name = request.form["userName"]
    try:
        # Check if the sheet already exists
        try:
            existing_sheet = sheet.worksheet(user_name)
            print(f"Sheet for {user_name} already exists.")
        except gspread.exceptions.WorksheetNotFound:
            existing_sheet = None

        if not existing_sheet:
            # Create a new sheet with the user's name
            new_sheet = sheet.add_worksheet(title=user_name, rows="100", cols="20")
            # Labels
            new_sheet.append_row([
                "burden",                      #A1 burden
                "discount",                    #B1 discount
                "intervention_shown",          #C1 intervention_shown
                "total_flashcards_learned",    #D1 total_flashcards_learned
                "flashcards_remaining",        #E1 flashcards_remaining
                "training_flashcards_unique",  #F1 training_flashcards_unique
                "training_flashcards_seen",    #G1 training_flashcards_seen
                "training_flashcards_flipped", #H1 training_flashcards_flipped
                "testing_flashcards_seen",     #I1 testing_flashcards_seen
                "testing_flashcards_learned"   #J1 testing_flashcards_learned
                "status"                       #K1 status
                "timestamp"                    #L1 status
                ])
            print(f"Created new sheet for {user_name}")
            return redirect(url_for('consent', user_name=user_name))
        else: 
            return redirect(url_for('entry', user_name = user_name))
    except Exception as e:
        print(f"Error creating new sheet for {user_name}: {e}")
        return "Internal Server Error", 500

@app.route("/survey", methods=["GET", "POST"])
def survey():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        print(user_name)
        answers = read_entry_survey(request.form)
        ws = sheet.worksheet("entrance-survey-responses")
        ws.append_row([user_name] + answers)
        return redirect(url_for('entry', user_name = user_name))
    return render_template("survey.html", user_name=user_name)

@app.route("/consent", methods=["GET", "POST"])
def consent():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        return redirect(url_for('survey', user_name = user_name))
    return render_template("consent.html", user_name=user_name)

@app.route("/entry", methods=["GET", "POST"])
def entry():
    user_name = request.args.get("user_name")
    
    # Randomize the user
    intervention = randomize_intervention()
    burden = randomize_burden()
    skill = randomize_skill()
    assignment_sheet = sheet.worksheet("condition-assignments")
    if user_name not in assignment_sheet.col_values(1)[1:]:
        assignment_sheet.append_row([user_name, intervention, burden, skill])

    if request.method == "POST":
        action = request.form.get('action')
        if action == "quit": 
            ws = sheet.worksheet(user_name)
            ws.append_row([None, None, "Quit!", None])
            return redirect(url_for("end", user_name = user_name))
        elif action == "participate":
            return redirect(url_for('tutorial', user_name=user_name))
    return render_template("entry.html", user_name=user_name, intervention = intervention, burden = burden, skill = skill)

@app.route("/tutorial", methods=["GET", "POST"])
def tutorial():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        return redirect(url_for('review', user_name = user_name))
    return render_template("tutorial.html", user_name=user_name)

@app.route("/review", methods=["GET", "POST"])
def review():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        ws = sheet.worksheet(user_name)
        ws.append_row([
                None, #A1 burden
                None, #B1 discount
                None, #C1 intervention_shown
                None, #D1 total_flashcards_learned
                None, #E1 flashcards_remaining
                int(request.form.get("training_flashcards_unique")), #F1 training_flashcards_unique
                int(request.form.get("training_flashcards_seen")), #G1 training_flashcards_seen
                int(request.form.get("training_flashcards_flipped")), #H1 training_flashcards_flipped
                None, #I1 testing_flashcards_seen
                None, #J1 testing_flashcards_learned
                None, #K1 status
                None, #L1 timestamp
            ])
        return redirect(url_for('quiz', user_name=user_name))
    return render_template("review.html", user_name=user_name)

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        remaining = int(request.form.get("remaining"))
        
        # Update worksheet
        ws = sheet.worksheet(user_name)
        row = len(ws.get_all_values()) 
        print(row)
        ws.update_acell(f"I{row}", request.form.get("testing_flashcards_seen"))
        ws.update_acell(f"J{row}", request.form.get("testing_flashcards_learned"))
        ws.update_acell(f"E{row}", request.form.get("remaining"))

        # Redirect
        if remaining <= 0:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            ws.update_acell(f"L{row}", timestamp)
            ws.update_acell(f"K{row}", "complete")
            return redirect(url_for('goal', user_name = user_name))
        else: 
            return redirect(url_for('notification', user_name=user_name, last_round = request.form.get("testing_flashcards_learned")))
    return render_template("quiz.html", user_name=user_name)

@app.route("/notification", methods=["GET", "POST"])
def notification():
    user_name = request.args.get("user_name")
    last_round = request.args.get("last_round")
    if request.method == "POST":
        # Update worksheet
        ws = sheet.worksheet(user_name)
        row = len(ws.get_all_values())
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        ws.update_acell(f"A{row}", request.form.get("burden-negative"))
        ws.update_acell(f"B{row}", request.form.get("discount-negative"))
        ws.update_acell(f"C{row}", request.form.get("intervention_shown"))
        ws.update_acell(f"D{row}", request.form.get("learned"))
        ws.update_acell(f"L{row}", timestamp)
        
        if request.form.get("choice") == "end":
            ws.update_acell(f"K{row}", "quit")
            return redirect(url_for('end', user_name=user_name))
        else:
            ws.update_acell(f"K{row}", "continue")
            return redirect(url_for('review', user_name=user_name))

    return render_template("notification.html", user_name=user_name, last_round = last_round)

@app.route("/end")
def end():
    user_name = request.args.get("user_name")
    return render_template("end.html", user_name=user_name)

@app.route("/goal")
def goal():
    user_name = request.args.get("user_name")
    return render_template("goal.html", user_name=user_name)




def randomize_intervention():
    # See what the current randomizations are 
    ws = sheet.worksheet("condition-assignments")
    assignments = [0, 1, 2]
    assignments.extend(ws.col_values(2)[1:]) # skip the title
    intervention, num = np.unique(assignments, return_counts = True)
    min_intervention = np.argmin(num)
    return int(intervention[min_intervention])
    
def randomize_burden(): 
    return 0

def randomize_skill(): 
    return 1

def read_entry_survey(form):
    answers = []

    # Skill section
    for i in range(1, 7): 
        question = "skill-{}".format(i)
        if question in form: 
            answers.append(form.get(question))
        else: 
            answers.append(None)
    
    # Burden section
    for i in range(1, 5): 
        question = "burden-{}".format(i)
        if question in form: 
            answers.append(form.get(question))
        else: 
            answers.append(None)

    # Barrett
    for i in range(1, 31): 
        question = "impulsiveness-{}".format(i)
        if question in form: 
            answers.append(form.get(question))
        else: 
            answers.append(None)

    # MCQ
    for i in range(1, 10): 
        question = "mcq-{}".format(i)
        if question in form: 
            answers.append(form.get(question))
        else: 
            answers.append(None)

    print(answers)
    return answers

if __name__ == "__main__":
    # app.run(debug=True)
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
