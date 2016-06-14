from flask.ext.wtf import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import Required, Email, Length, Regexp, EqualTo
from wtforms import ValidationError
from ..models import User


class LoginForm(Form):
	email = StringField('Email', validators =[Required(), Length(1, 64), Email()])
	password = PasswordField('Mot de passe', validators =[Required()])
	remember_me  =BooleanField('Me garder connecte')
	submit = SubmitField('Se connecter')


class RegistrationForm(Form):
	firstname = StringField('Prenom', validators=[Required(), Length(1, 64)] )
	name = StringField('Nom', validators=[Required(), Length(1, 64)] )
	email = StringField('Email', validators=[Required(), Length(1, 64), Email()])
	password = PasswordField('Mot de passe', validators=[Required()])
	submit = SubmitField('Enregistrer')

	def validate_email(self, field):
		if User.query.filter_by(email=field.data).first():
			raise ValidationError('Email deja enregistre.')



