from flask import render_template
from . import main

@main.route('/')
def index():
    return render_template('app.html')

@main.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('app.html')
