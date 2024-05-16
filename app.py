from flask import Flask, render_template, redirect, url_for, session, request
import os 
from oauth2client.service_account import ServiceAccountCredentials 
import gspread

app = Flask(__name__)

# Read the credentials from the environment variable
credentials_json = os.environ.get("GOOGLE_CREDENTIALS")
if credentials_json:
    credentials_dict = json.loads(credentials_json)
    credential = ServiceAccountCredentials.from_json_keyfile_dict(credentials_dict, ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'])
    client = gspread.authorize(credential)
    sheet = client.open_by_key("1UfYOsQOB-fyR81VWoaicpUZHkmGjfBwn4K-iBo0")
    worksheet = sheet.get_worksheet(0)
else:
    raise ValueError("GOOGLE_CREDENTIALS environment variable is not set")


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/survey")
def survey(): 
    """
    received_data = request.form["data"]
    print("received pokemon", received_data)
    worksheet.append_row(received_data)
    """
    return render_template("survey.html")

@app.route("/review", methods=["POST", "GET"])
def next_page(): 
    received_data = request.form["data"]
    worksheet.append_row([received_data])
    return render_template("review.html")

@app.route("/notification")
def notification(): 
    return render_template("notification.html")

@app.route("/quiz")
def quiz(): 
    return render_template("quiz.html")

@app.route("/choice")
def choice(): 
    return render_template("choice.html")

@app.route("/end")
def end(): 
    return render_template("end.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
