from flask import Flask, render_template, request
from flask_webpack_loader import WebpackLoader

app = Flask(__name__)
webpack_loader = WebpackLoader(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

@app.route('/flask_route')
def flask_route():
    return 'This is flask route sample'


if __name__ == '__main__':
    app.run(debug=True)