from flask import render_template, redirect, request, url_for, flash
from flask.ext.login import logout_user, login_required
from flask.ext.login import login_user

from flaskapp.app import db
from flaskapp.models.user import User

from .forms import LoginForm, RegistrationForm
from . import auth


@auth.route('/login', methods=['GET', 'POST'])
def login():
	form = LoginForm()
	if form.validate_on_submit():
		user = User.query.filter_by(email=form.email.data).first()
		if user is not None and user.verify_password(form.password.data):
			login_user(user, form.remember_me.data)
			return redirect(request.args.get('next') or url_for('main.index'))
		flash('invalid username or password')
	return render_template('auth/login.html', form = form)


@auth.route('/logout')
def logout():
	logout_user()
	flash("You have been logged out")
	return redirect(url_for('main.index'))


@auth.route('/register', methods=['GET', 'POST']) 
def register():
	form = RegistrationForm()
	if form.validate_on_submit():
		user = User(firstname=form.firstname.data, name=form.name.data, email=form.email.data, password=form.password.data)
		db.session.add(user)
		flash('You can now login.')
		return redirect(url_for('auth.login'))
	return render_template('auth/register.html', form=form)

