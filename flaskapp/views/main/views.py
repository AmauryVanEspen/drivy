from flask import render_template, redirect, url_for
from flask.ext.login import current_user

from . import main

@main.route('/')
def index():
    return render_template('app.html')

