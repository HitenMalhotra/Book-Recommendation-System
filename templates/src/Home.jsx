import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Card, CardImg } from 'react-bootstrap';

function Home() {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    fetchPopularBooks();
  }, []);

  const fetchPopularBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/popular_books');
      const data = await response.json();
      setPopularBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
// darker shade teal color
  return (
    <div style={{ backgroundColor: 'teal', margin: '0', padding: '0', overflowX: 'hidden', height: '100vh', width: '100vw' }}>

      <br />
      <Container style={{ marginRight: 'auto', marginLeft: 'auto', color: 'White' }}>
        <h1 style={{ textAlign: 'center' }}>Popular Books</h1>
      </Container>

     <div style={{marginBottom:'50%'}}>
      <Container className='img-container'>

        {popularBooks.map((book, index) => (
          <Card key={index} className='img-item' style={{backgroundColor:'lightblue'}}>
            <CardImg src={book["Image-URL-M"]} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
            <Card.Body style={{ textAlign: 'center' }}>
              <p>{book["Book-Title"]}</p>
              <p className="mb-2 text-muted">{book["Book-Author"]}</p>
              <p>
                {book["num_ratings"]}
              </p>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  </div>
  );
}

export default Home;