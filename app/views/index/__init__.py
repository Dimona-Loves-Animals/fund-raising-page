from flask import redirect, url_for
from app import app; from app.views import *
import json
from app import data

def template(rtl=False):
    return render.template('index',
	rtl=rtl,
	items=json.dumps(data.ITEMS()),
	areas=json.dumps(data.AREAS()),
    )

@app.route("/")
def index():
    return redirect(url_for('index_hebrew'))

@app.route("/he")
def index_hebrew():
    app.config['BABEL_DEFAULT_LOCALE'] = 'he'
    return template(rtl=True)

@app.route("/en")
def index_english():
    app.config['BABEL_DEFAULT_LOCALE'] = 'en'
    return template()

@app.route("/fr")
def index_french():
    app.config['BABEL_DEFAULT_LOCALE'] = 'fr'
    return template()

@app.route("/ar")
def index_arabic():
    app.config['BABEL_DEFAULT_LOCALE'] = 'ar'
    return template(rtl=True)

@app.route("/es")
def index_espaniol():
    app.config['BABEL_DEFAULT_LOCALE'] = 'es'
    return template()

@app.route("/ru")
def index_russian():
    app.config['BABEL_DEFAULT_LOCALE'] = 'ru'
    return template()