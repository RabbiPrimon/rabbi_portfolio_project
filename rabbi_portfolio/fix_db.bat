@echo off
where python > migration_out.txt 2>&1
python --version >> migration_out.txt 2>&1
python manage.py makemigrations myapp >> migration_out.txt 2>&1
python manage.py migrate >> migration_out.txt 2>&1
