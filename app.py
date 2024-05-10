from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/survey")
def survey(): 
    return render_template("survey.html")

@app.route("/review")
def next_page(): 
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