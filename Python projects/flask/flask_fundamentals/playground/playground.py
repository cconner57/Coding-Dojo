from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html", boxes=int("0"), box_color="red")

@app.route('/play')
def play():
    return render_template("index.html", boxes=int("0"), box_color="red")

@app.route('/play/<box>')
def box(box):
    return render_template("index.html", boxes=int(box), box_color="red")

@app.route('/play/<box>/<color>')
def color(box, color):
    return render_template("index.html", boxes=int(box), box_color=color)

if __name__=="__main__":
    app.run(debug=True)
