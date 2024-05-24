import { Row, Col, Card } from 'react-bootstrap';
import CustomPieChart from '../../../screens/Custom Graphs Home pages/CustomPieChart';
import CustomBarGraph from '../../../screens/Custom Graphs Home pages/CustomBarGraph';
import './BaiAndPie.css'

const BarAndPie = ({ data, colors }) => {
    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='Homepage_card_graph'>
                        <Card.Body>
                            <CustomBarGraph data={data} xAxisKey="name" barKey="value" colors={colors} />
                        </Card.Body>
                    </Card>
                    <br></br>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='Homepage_card_graph'>
                        <Card.Body>
                            <CustomPieChart data={data} xAxisKey="name" barKey="value" colors={colors} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default BarAndPie;