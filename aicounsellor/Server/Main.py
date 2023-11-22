from flask import Flask, jsonify
from flask_cors import CORS
 
app = Flask(__name__)
CORS(app)
 
@app.route('/')
def hello_world():
    return 'Hello World'
 

@app.route('/get-insights')
def getInsights():
    response = {'message': 'Insights Generated', 'college': 'VIT Chennai'}
    return jsonify(response)

if __name__ == '__main__':
    app.run()