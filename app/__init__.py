#!/usr/bin/env python
__all__ = ["data",]

from flask import Flask
from flask.ext.babel import Babel
app = Flask(__name__, template_folder='views')
babel = Babel(app)

# Configurations
app.config.from_object('config')
app.config.from_pyfile('data.py')
#app.config['ITEMS'] = data.ITEMS
#app.config.update(
#    ITEMS = data.ITEMS,
#)

# Load views
import views

# run server
def run():
    # Change template_folder to minified versions
    if app.config['PRODUCTION']:
        print " * starting in PRODUCTION mode"
        import jinja2
        my_loader = jinja2.ChoiceLoader([
	    jinja2.FileSystemLoader([app.config['MIN_DIR'],]),
            app.jinja_loader,
        ])
        app.jinja_loader = my_loader
    else:
        print " * starting in DEVELOPMENT mode"
        app.static_folder='views'
    host = app.config['HOST']
    port = app.config['PORT']
    debug = app.config['DEBUG']
    app.run(host=host, port=port, debug=debug)