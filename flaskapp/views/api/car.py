from flask import jsonify, request, g
from flaskapp.models.car import Car
from flaskapp.app import db
from . import api


@api.route('/cars/') 
def get_cars():
	cars = Car.query.all()
	return jsonify({ 'cars': [car.to_json() for car in cars] })


@api.route('/cars/<int:id>')
def get_car(id):
	car = Car.query.get_or_404(id) 
	return jsonify(car.to_json())


@api.route('/cars/', methods=['POST'])  
def new_car():
	car = Car.from_json(request.json)
	car.proprietor = g.current_user
	db.session.add(car)
	db.session.commit()
	return jsonify(car.to_json()), 201, \
		{'Location': url_for('api.get_car', id=car.id, _external=True)}


@api.route('/cars/<int:id>', methods=['PUT']) 
def edit_car(id):
	car = Car.query.get_or_404(id)
	car.model = request.json.get('model', car.model) 
	db.session.add(car)
	return jsonify(car.to_json())

