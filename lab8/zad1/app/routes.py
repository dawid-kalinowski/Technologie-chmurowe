from app import app

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/hello/<name>')
def hello_name(name):
    return f"Hello, {name}!"
