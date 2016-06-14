from flask import render_template
from . import help


@help.route('/')
def index():
	return render_template('help/index.html')

