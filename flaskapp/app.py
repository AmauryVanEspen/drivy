from flask import Flask
from flask.ext.bootstrap import Bootstrap
from flask.ext.moment import Moment
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager
from flaskapp.config import config


bootstrap = Bootstrap()
moment = Moment()
db = SQLAlchemy()

login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.login'

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    bootstrap.init_app(app)
    moment.init_app(app)
    db.init_app(app)
    login_manager.init_app(app)

    if not app.debug and not app.testing and not app.config['SSL_DISABLE']:
        from flask.ext.sslify import SSLify
        sslify = SSLify(app)

    from flaskapp.views.api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    from flaskapp.views.main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from flaskapp.views.auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')

    from flaskapp.views.dashboard import dashboard as dashboard_blueprint
    app.register_blueprint(dashboard_blueprint, url_prefix='/dashboard')

    from flaskapp.views.help import help as help_blueprint
    app.register_blueprint(help_blueprint, url_prefix='/help')

    from flaskapp.views.rental import rental as rental_blueprint
    app.register_blueprint(rental_blueprint, url_prefix='/car-rental')

    from flaskapp.views.users import users as users_blueprint
    app.register_blueprint(users_blueprint, url_prefix='/users')

    return app
