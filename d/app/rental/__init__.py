from flask import Blueprint

rental = Blueprint('rental',__name__)

from . import views
