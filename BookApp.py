from flask import Flask, render_template, jsonify, request
import pickle
from flask_cors import CORS
# popular_book=pickle.load(open('popular.pkl', 'rb'))

import pandas as pd
# Read CSV into a DataFrame
df= pd.read_csv('popular_books.csv')
recommendations_df = pd.read_csv('recommendations.csv')

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

@app.route('/recommend_books', methods=['GET'])
def recommend_books():
    query = request.args.get('query', '').strip()  
    if not query:
        return jsonify([])
    
    # Filter the DataFrame based on the query
    filtered_df = recommendations_df[recommendations_df['Searched-Book-Title'].str.contains(query, case=False, na=False)]

    # Convert the filtered DataFrame to a list of dictionaries
    recommendations = filtered_df.to_dict(orient='records')
    
    return jsonify(recommendations)
    
#     return jsonify(data)

if __name__=='__main__':
    app.run(debug=True)