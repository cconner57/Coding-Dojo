from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def create_user():
    print(request.form)
    print(f"name_from_form: {request.form['name']}")
    print(f"location_from_form: {request.form['location']}")
    print(f"language_from_form: {request.form['language']}")
    print(f"comment_from_form: {request.form['comment']}")

    return render_template("show.html", name_on_template=request.form["name"], location_on_template=request.form["location"],
    language_on_template=request.form["language"],
    comment_on_template=request.form["comment"])

# ImmutableMultiDict([('name', 'chris'), ('location', 'burbank'), ('language', 'english'), ('comment', 'testing')])

if __name__ == "__main__":
    app.run(debug=True)
