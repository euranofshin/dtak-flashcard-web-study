from flask import Flask, render_template, request, redirect, url_for
import os
import json
# from dotenv import load_dotenv
from oauth2client.service_account import ServiceAccountCredentials
import gspread

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
            # Add the user's name in the first row
            new_sheet.append_row([user_name])
            print(f"Created new sheet for {user_name}")
        return redirect(url_for('review', user_name=user_name))
    except Exception as e:
        print(f"Error creating new sheet for {user_name}: {e}")
        return "Internal Server Error", 500

@app.route("/survey", methods=["GET", "POST"])
def survey():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        burden_neg = request.form.get("burden-negative")
        burden_pos = request.form.get("burden-positive")
        quitting_neg = request.form.get("quitting-negative")
        quitting_pos = request.form.get("quitting-positive")
        discount_neg = request.form.get("discount-negative")
        discount_pos = request.form.get("discount-positive")
        visit_count = int(request.form.get("visitCount", 0))
        try:
            user_sheet = sheet.worksheet(user_name)
            user_sheet.append_row([burden_neg, burden_pos, quitting_pos, quitting_neg, discount_pos, discount_neg])
            if visit_count > 2:
                return redirect(url_for('choice', user_name=user_name))
            else:
                return redirect(url_for('review', user_name=user_name))
            #return redirect(url_for('review', user_name=user_name))
        except Exception as e:
            print(f"Error in /survey route: {e}")
            return "Internal Server Error", 500
    return render_template("survey.html", user_name=user_name)

@app.route("/review", methods=["GET", "POST"])
def review():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        return redirect(url_for('quiz', user_name=user_name))
    return render_template("review.html", user_name=user_name)

@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        return redirect(url_for('notification', user_name=user_name))
    return render_template("quiz.html", user_name=user_name)

@app.route("/notification", methods=["GET", "POST"])
def notification():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        selected_word = request.form.get("selected_word")
        try:
            user_sheet = sheet.worksheet(user_name)
            user_sheet.append_row([selected_word])
            return redirect(url_for('survey', user_name=user_name))
        except Exception as e:
            print(f"Error in /notification route: {e}")
            return "Internal Server Error", 500
    return render_template("notification.html", user_name=user_name)

@app.route("/choice", methods=["GET", "POST"])
def choice():
    user_name = request.args.get("user_name")
    if request.method == "POST":
        if request.form.get("choice") == "end":
            return redirect(url_for('end', user_name=user_name))
        else:
            return redirect(url_for('review', user_name=user_name))
    return render_template("choice.html", user_name=user_name)

@app.route("/end")
def end():
    user_name = request.args.get("user_name")
    return render_template("end.html", user_name=user_name)

if __name__ == "__main__":
    # app.run(debug=True)
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
