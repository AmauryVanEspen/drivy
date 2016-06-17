from flask import render_template, redirect, url_for, flash
from flask.ext.login import login_required, current_user
from flaskapp.app import db
from flaskapp.models.user import User
from flaskapp.models.car import Car
from .forms import EditProfileForm, CarForm
from . import dashboard



@dashboard.route('/rentals')
@login_required
def rentals():
	return render_template('dashboard/rentals.html')


@dashboard.route('/payments')
@login_required
def payments():
	return render_template('dashboard/payments.html')


@dashboard.route('/profile')
@login_required
def profile():
	user = User.query.get(current_user.id)
	return render_template('dashboard/profile.html', user=user)


@dashboard.route('/profile/edit', methods=['GET','POST'])
@login_required
def profile_edit():
	form = EditProfileForm()
	if form.validate_on_submit():
		current_user.firstname = form.firstname.data
		current_user.name = form.name.data
		current_user.email = form.email.data
		db.session.add(current_user)
		flash('Your profile has been updated.')
		return redirect('dashboard/profile')
	form.firstname.data = current_user.firstname
	form.name.data = current_user.name
	form.email.data = current_user.email
	return render_template('dashboard/profile_edit.html', form=form)


@dashboard.route('/account_settings')
@login_required
def account_settings():
	return render_template('dashboard/account_settings.html')


@dashboard.route('/cars')
@login_required
def cars():
	cars = Car.query.filter_by(proprietor_id=current_user.id)
	return render_template('dashboard/cars.html', cars=cars)


@dashboard.route('/cars/new', methods=['GET', 'POST'])
@login_required
def new():
	form = CarForm()
	if form.validate_on_submit():
		car = Car(make=form.make.data, model=form.model.data, description=form.description.data, price=form.price.data, proprietor=current_user._get_current_object())
		db.session.add(car)
		return redirect(url_for('rental.all'))
	return render_template('dashboard/cars_new.html', form=form)


@dashboard.route('/cars/<int:car_id>/')
@login_required
def car(car_id):
	car = Car.query.get(car_id)
	return render_template('dashboard/car.html', car=car)


@dashboard.route('/cars/<int:car_id>/edit', methods=['GET','POST'])
@login_required
def car_edit(car_id):
	car = Car.query.get(car_id)
	form = CarForm()
	if form.validate_on_submit():
		car.make = form.make.data
		car.model = form.model.data
		car.description = form.description.data
		car.price = form.price.data
		db.session.add(car)
		flash('Votre annonce a bien ete mise a jour')
		return redirect('dashboard/cars')
	form.make.data = car.make
	form.model.data = car.model
	form.description.data = car.description
	form.price.data = car.price
	return render_template('dashboard/car_edit.html', form=form)





