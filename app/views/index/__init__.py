from flask import redirect, url_for
from app import app; from app.views import *
import json

@app.route("/")
def index():
    return redirect(url_for('index_hebrew'))

@app.route("/he")
def index_hebrew():
    return render.template('index', items=json.dumps(app.config['ITEMS']) )

@app.route("/en")
def index_english():
    return redirect(url_for('index_hebrew'))

@app.route("/fr")
def index_french():
    return redirect(url_for('index_hebrew'))

@app.route("/ar")
def index_arabic():
    return redirect(url_for('index_hebrew'))

@app.route("/es")
def index_espaniol():
    return redirect(url_for('index_hebrew'))

@app.route("/ru")
def index_russian():
    return redirect(url_for('index_hebrew'))
