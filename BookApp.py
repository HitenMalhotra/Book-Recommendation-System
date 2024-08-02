from flask import Flask, render_template, jsonify
import pickle
from flask_cors import CORS
# popular_book=pickle.load(open('popular.pkl', 'rb'))

import pandas as pd
# Read CSV into a DataFrame
df= pd.read_csv('popular_books.csv')

app=Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html',
    )

@app.route('/api/popular_books', methods=['GET'])
def get_popular_books():
    # Convert DataFrame to a list of dictionaries
    popular_books = df.to_dict(orient='records')
    return jsonify(popular_books)


if __name__=='__main__':
    app.run(debug=True)