from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL   
app = Flask(__name__)

@app.route("/users/new", methods=['GET'])
def index(): 
    return render_template("index.html")

@app.route("/add_user", methods=['POST'])
def create_user():            
    mysql = connectToMySQL('mydb')
    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(f)s, %(l)s, %(e)s, NOW(), NOW());"
    data = {
        "f" : request.form['first_name'],
        "l" : request.form['last_name'],
        "e" : request.form['email']
    } 
    user_id = str(mysql.query_db(query, data))
    return redirect('/users/' + str(user_id)) 

@app.route("/users")
def users():
    mysql = connectToMySQL('mydb')
    one_user = mysql.query_db("SELECT * FROM users")
    # destroy = mysql.query_db("DELETE FROM users WHERE id=''")    
    return render_template('show.html', all_users = one_user)

# , delete = destroy

@app.route("/edit_user")
def edit():
    mysql = connectToMySQL('mydb')	 
    # user_id = mysql.query_db()        
    return  redirect('/users/' + str(user_id) + '/edit.html')

@app.route('/users/<user_id>')
def single_user(user_id):
    mysql = connectToMySQL('mydb')
    query = "SELECT * FROM users WHERE %(i)s;"
    data = {
        'i' : request.form['id']
    }
    user_id = mysql.query_db(query, data)
    return render_template('users.html', user_id = id)

if __name__ == "__main__":
    app.run(debug=True)