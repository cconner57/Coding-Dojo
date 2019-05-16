from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL   
app = Flask(__name__)

# Create users
@app.route('/users/new')
def new():
	return render_template('new.html')

@app.route('/users/create', methods =['POST'])
def create():
    mysql = connectToMySQL('mydb')
    query = 'INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(f)s, %(l)s, %(e)s, NOW(), NOW());'
    data = {
		'f': request.form['first_name'],
		'l': request.form['last_name'],
		'e': request.form['email']
	}
    user_new = mysql.query_db(query, data)
    return redirect('/users/' + str(user_new))

#View users
@app.route('/users')
def index():
    mysql = connectToMySQL('mydb')
    query = 'SELECT id, first_name, last_name, email, created_at FROM users;'
    all_users = mysql.query_db(query)
    return render_template('index.html', user_edits = all_users)

@app.route('/users/<user_id>/')
def show(user_id):
    mysql = connectToMySQL('mydb')
    query = 'SELECT id, first_name, last_name, email, created_at, updated_at FROM users WHERE id = %(i)s;'
    data = {
        'i': user_id
    }
    user_info = mysql.query_db(query, data)
    return render_template('index.html', user_edit = user_info)

#Update users
# @app.route('/users/<user_id>/', methods=['POST'])
# def single_user(user_id):
#     mysql = connectToMySQL('mydb')
#     query = 'INSERT INTO users (first_name, last_name, email, updated_at) VALUES (%(f)s, %(l)s, %(e)s, NOW(), NOW())'
#     # ' SELECT id, first_name, last_name, email, FROM users'
#     # 'UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() WHERE id = :id;'
#     data = {
# 		'id': user_id,
# 		'f': request.form['first_name'],
# 		'l': request.form['last_name'],
# 		'e': request.form['email']
#     }
#     mysql.query_db(query, data)
#     return ('show', user_id = user_id)

@app.route('/users/<user_id>/edit')
def edit(user_id):
    mysql = connectToMySQL('mydb')
    query = 'SELECT id, first_name, last_name, email FROM users WHERE id = %(i)s;'
    data = {
		'i': user_id
	}
    user_edit = mysql.query_db(query, data)
    return render_template('edit.html', edit_user = user_edit)

@app.route('/users/<user_id>/update', methods = ['POST'])
def update(user_id):
    mysql = connectToMySQL('mydb')
    query = 'UPDATE users SET first_name, last_name, email WHERE id = %(i)s;'
    data = {
        'i': user_id
    }
    user_update = mysql.query_db(query, data)

#Delete users
@app.route('/users/<user_id>/delete')
def delete_user(user_id):
	query = 'DELETE FROM users WHERE id = %(i)s;'
	data = {
		'i': user_id
	}
	user_delete = mysql.query_db(query, data)
	return redirect('/users')

if __name__ == "__main__":
    app.run(debug=True)