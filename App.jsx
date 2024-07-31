import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Card, CardImg, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';


function App() {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    fetch('/api/popular_books')
      .then(response => response.json())
      .then(data => {
        const bookData = data.book_name.map((name, index) => ({
          name,
          author: data.author[index],
          img: data.img[index],
          votes: data.votes[index],
          rating: data.rating[index],
        }));

        setPopularBooks(bookData);
      })
      .catch(error => console.error('Error fetching popular books:', error));
  }, []);



  return (

    <div style={{ backgroundColor: 'blue', margin: '0', padding: '0', overflowX: 'hidden', height: '100vh', width: '100vw' }}>    
      <Navbar>
        <NavbarBrand style={{ color: 'white' }}>Book Recommendation System</NavbarBrand>
        <Nav>
          <NavLink style={{ color: 'white' }}>Home</NavLink>
          <NavLink style={{ color: 'white' }}>About</NavLink>
          <NavLink style={{ color: 'white' }}>Contact</NavLink>
        </Nav>
      </Navbar>

      <Container style={{ marginRight: '80%', color: 'Black' }}>
        <h1>Popular Books</h1>
      </Container>

      <Card style={{ marginLeft: '15%', marginRight: '15%' }}>
        <Container className='img-container'>
          {popularBooks.map((book, index) => (
            <div key={index} style={{ textAlign: 'center', marginBottom: '20px' }}>
              <CardImg className='img-item' src={book.img} alt={book.name} style={{ width: '150px', height: '200px' }} />
              <div>
                <h5>{book.name}</h5>
                <p>Author: {book.author}</p>
                <p>Votes: {book.votes}</p>
                <p>Rating: {book.rating.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </Container>
      </Card>
    </div>

  );
}

export default App;
