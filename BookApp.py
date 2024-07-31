from flask import Flask, render_template, jsonify
import pickle

popular_book=pickle.load(open('popular.pkl', 'rb'))
                              
BookApp=Flask(__name__)

@BookApp.route('/')
def index():
    return render_template('App_template/src/main.jsx',
    )

@BookApp.route('/api/popular_books')
def get_popular_books():
    data = {
        'book_name': list(popular_book['Book-Title'].values),
        'author': list(popular_book['Book-Author'].values),
        'img': list(popular_book['Image-URL-M'].values),
        'votes': list(popular_book['num_ratings'].values),
        'rating': list(popular_book['avg_rating'].values),
    }
    return jsonify(data)


if __name__=='__main__':
    BookApp.run(debug=True)