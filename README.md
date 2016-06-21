drivy
======

This repository contains the source code of drivy.lol

    ├── flaskapp -  
    ├── migrations - DB migrations (using Alembic) 
    ├── tests - Utils for tests
    └── manage.py - Management script to run migrations/start dev server, etc.


reminder
---------

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

React:
- npm install 
- npm start
- npm run build


heroku
-------

heroku :
- heroku run python manage.py deploy
- heroku restart
- heroku maintenance:off
- heroku ps:scale web=1
- heroku logs -t
