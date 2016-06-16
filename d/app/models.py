from . import db
from flask import url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask.ext.login import UserMixin, AnonymousUserMixin
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from . import login_manager
from app.exceptions import ValidationError


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(64), index=True)
    name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(64), unique=True, index=True)
    password_hash = db.Column(db.String(128))
    cars = db.relationship('Car', backref='proprietor', lazy='dynamic')

    def to_json(self): 
        json_user = {
            'url': url_for('api.get_user', id=self.id, _external=True),
            'firstname': self.firstname,
            'name': self.name,
            'email': self.email,
            'cars': url_for('api.get_user_cars', id=self.id, _external=True)
        }
        return json_user

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self,password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def generate_auth_token(self, expiration):
        s = Serializer(current_app.config['SECRET_KEY'],
                       expires_in=expiration)
        return s.dumps({'id': self.id}).decode('ascii')

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except:
            return None
        return User.query.get(data['id'])

    def __repr__(self):
        return '<User %r>' % self.email


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


class AnonymousUser(AnonymousUserMixin):
    def can(self, permissions):
        return False

    def is_administrator(self):
        return False

login_manager.anonymous_user = AnonymousUser

