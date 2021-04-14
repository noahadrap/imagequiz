import {Card, CardDeck} from "react-bootstrap";
import {useEffect, useState} from "react";
import {
  Link
} from "react-router-dom";
import api from "../communication/api"
function Home () {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    if (flowers.length == 0) {
      api.getFlowers()
      .then(x => setFlowers(x))
      .catch(e => console.log(e));
    }
  })
    return (
    
      <div>
        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        {flowers.map((flower, index) => 
        <Link to={{pathname:'/quiz', state: {quizid: index + 1}}}>
        <Card style={{ width: '18rem', flex: 1 }}>
        <Card.Img variant="top" src={flower.picture} />
        <Card.Body>
          <Card.Title>{flower.name}</Card.Title>
        </Card.Body>
        </Card>
        </Link>
        )}
      
 
      </CardDeck>
      </div>
      

      

      

      
      
    );
}

export default Home;