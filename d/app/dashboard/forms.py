from flask.ext.wtf import Form
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField, IntegerField
from wtforms.validators import Required, Email, Length, Regexp, EqualTo
from wtforms import ValidationError
from ..models import User


class EditProfileForm(Form):
	firstname = StringField('Prenom', validators=[Required(), Length(1, 64)] )
	name = StringField('Nom', validators=[Required(), Length(1, 64)] )
	email = StringField('Email', validators=[Required(), Length(1, 64), Email()])
	submit = SubmitField('Submit')


class CarForm(Form):
	make = StringField('Marque', validators=[Required()])
	model = StringField('Modele', validators=[Required()])
	description = TextAreaField("Description", validators=[Required()]) 
	price = IntegerField('Prix', validators=[Required()])
	submit = SubmitField('Mettre mon annonce en ligne')

