Drivy
======

This repository contains the source code of drivy.lol






Flask
======

reminder:
- activate virtualenv : source venv/bin/activate
						deactivate 
- requirements : pip freeze >requirements.txt
				 pip install -r requirements.txt
- tests : python manage.py test
- db :  python manage.py db init 
		python manage.py db migrate -m "initial migration" 
		python manage.py db upgrade





Previous requirements :
------------------------

Flask==0.10.1
Flask-Mail==0.9.0
Flask-Migrate==1.1.0
Flask-Moment==0.2.1
Flask-SQLAlchemy==1.0
Flask-Script==0.6.6
Flask-WTF==0.9.4
Jinja2==2.7.1
Mako==0.9.1
MarkupSafe==0.18
SQLAlchemy==0.9.9
WTForms==1.0.5
Werkzeug==0.10.4
alembic==0.6.2
blinker==1.3
