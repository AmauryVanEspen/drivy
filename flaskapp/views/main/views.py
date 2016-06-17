from flask import render_template, redirect, url_for
from flask.ext.login import current_user
from . import main


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/rent_your_car')
def rent_your_car():
	return render_template('rent_your_car.html')
