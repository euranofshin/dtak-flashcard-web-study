from flask import Flask, render_template, redirect, url_for, session, request
import os 
from oauth2client.service_account import ServiceAccountCredentials 
import gspread

app = Flask(__name__)

credential = ServiceAccountCredentials.from_json_keyfile_name("credentials.json",['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'])
client = gspread.authorize(credential)
sheet = client.open_by_key("1UfYOsQONhRGB-fyR81VWoaicpUZHkmGjfBwn4K-iBo0")
worksheet = sheet.get_worksheet(0) 


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