from flask import render_template
from flaskapp.models.user import User
from flaskapp.models.car import Car
from . import users


@users.route('/all')
def all():
	users = User.query.all()
	return render_template('users/all.html', users=users)


@users.route('/<int:user_id>/')
def users(user_id):
	user = User.query.get(user_id)
	cars = Car.query.filter_by(proprietor_id=user_id)
	return render_template('users/profile.html', user=user, cars=cars)

