from flask import url_for
from flask.ext.login import UserMixin, AnonymousUserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flaskapp.app import db
from flaskapp.app import login_manager
from flaskapp.exceptions import ValidationError


class Car(db.Model):
    __tablename__ = 'cars'
    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(64), index = True)
    model = db.Column(db.String(64), index = True)
    description = db.Column(db.Text)
    price =  db.Column(db.Integer)
    proprietor_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # address = 

    def to_json(self): 
        json_car = {
            'url': url_for('api.get_car', id=self.id, _external=True),
            'make': self.make,
            'model': self.model,
            'description': self.description,
            'price': self.price
        }
        return json_car
    # #'proprietor': url_for('api.get_user', id=self.proprietor_id, _external=True)

    @staticmethod
    def from_json(json_post):
        make = json_post.get('make')
        model = json_post.get('model') 
        description = json_post.get('description')
        price = json_post.get('price')
        if model is None or model == '':
            raise ValidationError('car does not have a model') 
        return Car(make=make, model=model, description=description, price=price )


