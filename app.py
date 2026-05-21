from flask import Flask, render_template
import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# Test DB connection on startup
def test_db():
    try:
        conn = pymysql.connect(
            host="10.2.1.79",
            user="tord",
            password="tord123",
            database="testE"
        )
        print("✅ MariaDB Connected!")
        conn.close()
    except pymysql.Error as e:
        print(f"❌ DB Failed: {e}")

@app.route('/')
@app.route('/Home')
def home():
    return render_template('Home.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/log')
def log():
    return render_template('log.html')

@app.route('/info')
def info():
    return render_template('info.html')

if __name__ == "__main__":
    test_db()  
    app.run(host="0.0.0.0", debug=True, port=6868)