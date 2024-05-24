import { Card, Row, Col } from 'react-bootstrap';

const RectangleCards = ({ cardsData }) => {
    return (
        <div>
            <Row>
                {cardsData.map((item, index) => (
                    <Col key={index} lg={4}>
                        <Card className="custom-card shadow">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default RectangleCards;