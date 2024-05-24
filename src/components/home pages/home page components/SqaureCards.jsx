import { Card, Row, Col } from 'react-bootstrap';
import './SquareCard.css'

const SquareCards = ({ cardsData }) => {
    return (
        <>
            <Row className='justify-content-center'>
                {cardsData.map((card, index) => (
                    <Col key={index} lg={3} className='mt-3'>
                        <Card id='Homepage_card' className='border-0 shadow-sm'>
                            <Card.Body className='Homepage_card'>
                                <Card.Title style={{ textAlign: " center" }}>{card.title}</Card.Title>
                                <Card.Text style={{ textAlign: " center" }}>{card.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <br></br>
        </>
    );
}

export default SquareCards;
