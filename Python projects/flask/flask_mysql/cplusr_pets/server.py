from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL   
app = Flask(__name__)

@app.route("/")
def index():
    mysql = connectToMySQL('mydb')	        
    pets = mysql.query_db('SELECT * FROM pets;')  
    return render_template("index.html", my_pets = pets)
            
@app.route('/add_pet', methods=['POST'])
def add_pet():
    mysql = connectToMySQL('mydb')
    query = "INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(n)s, %(d)s, NOW(), NOW());"
    data = {
        "n" : request.form['name'],
        "d" : request.form['type']
    }
    pet_id = mysql.query_db(query, data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)