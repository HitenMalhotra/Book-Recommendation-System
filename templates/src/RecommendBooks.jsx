import React, { useState } from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

const Recommend = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/recommend_books', { // Adjust URL if needed
        params: { query }
      });
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search for a Book</Form.Label>
          <Form.Control
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter book title"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>


      <Row>
        {recommendations.length > 0 ? (
          recommendations.map((rec, index) => (
            <Col md={3} key={index} style={{ marginBottom: '20px' }}>
              <Card className="recommend-card">
                <Card.Img 
                  variant="top" 
                  src={rec['Recommended-Book-Image-URL']} 
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>{rec['Recommended-Book-Title']}</Card.Title>
                  <Card.Text>
                    <strong>Author:</strong> {rec['Recommended-Book-Author']}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No recommendations found.</p>
        )}
      </Row>

    </Container>
  );
};

export default Recommend;
