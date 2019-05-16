from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html", add_rows=int("4"))

@app.route('/<rows>')
def row(rows):
    return render_template("index.html", add_rows=int(rows))

if __name__=="__main__":
    app.run(debug=True)
