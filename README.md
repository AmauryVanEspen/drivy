drivy repository
==================

This repository contains the source code of drivy.lol

    ├── flaskapp - the Webapp built with Flask 
    ├── migrations - DB migrations (using Alembic) 
    ├── node_modules - all the javascript packages installed using npm
    ├── semantic - semantic-ui sources
    ├── ...
    └── manage.py - Management script to run migrations/start dev server, etc.


reminder (for me)
------------------

Flask:
- pip list -> list all the modules installed
- activate virtualenv : source venv/bin/activate
						deactivate 
- requirements : pip freeze >requirements.txt
				 pip install -r requirements.txt
- tests : python manage.py test
- db :  python manage.py db init 
		python manage.py db migrate -m "initial migration" 
		python manage.py db upgrade
- dev server python manage.py runserver


React:
- npm install 
- npm start
- npm run build

Bower:
- bower install

Heroku :
- heroku login
- heroku run (--app flask-drivy) python manage.py deploy
- heroku restart
- heroku maintenance:off
- heroku ps:scale web=1
- heroku logs -t
