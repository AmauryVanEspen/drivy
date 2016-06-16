from flask import jsonify
from . import api
from ..models import User, Car


@api.route('/users/') 
def get_users():
    users = User.query.all()
    return jsonify({ 'users': [user.to_json() for user in users] })


@api.route('/users/<int:id>')
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_json())


@api.route('/users/<int:id>/cars/')
def get_user_cars(id):
    user = User.query.get_or_404(id)
    cars = user.cars.all()
    return jsonify({
        'cars': [car.to_json() for car in cars]
    })
