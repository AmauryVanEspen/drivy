import os

from flask.ext.migrate import Migrate, MigrateCommand
from flask.ext.script import Manager, Shell

from flaskapp.app import create_app, db
from flaskapp.models.user import User


app = create_app(os.getenv('DRIVY_CONFIG') or 'default')
manager = Manager(app)
migrate = Migrate(app, db)


def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)
manager.add_command("shell", Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)


@manager.command
def deploy():
    from flask.ext.migrate import upgrade
    upgrade()


if __name__ == '__main__':
    manager.run()
