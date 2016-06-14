from flask import render_template
from . import rental
from ..models import Car, User


@rental.route('/<int:car_id>/')
def car(car_id):
	car = Car.query.get(car_id)
	return render_template('rental/car.html', car=car)


@rental.route('/all')
def all():
	cars = Car.query.all()
	return render_template('rental/all.html', cars=cars)


@rental.route('/rent')
def rent(user_id,car_id):
	user =  User.query.get(user_id)
	car = Car.query.get(car_id)
	return render_template('rental/rent.html', user=user, car=car)
