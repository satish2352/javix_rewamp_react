import { Row, Col, Card } from 'react-bootstrap';
import CustomPieChart from '../../../screens/Custom Graphs Home pages/CustomPieChart';
import CustomBarGraph from '../../../screens/Custom Graphs Home pages/CustomBarGraph';
import './BaiAndPie.css'

const BarAndPie = ({ data, colors }) => {
    return (
        <div>
            <br></br>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card id='Homepage_card_graph'>
                        <Card.Body>
                            <h5 className='my-3'>Pai Charts </h5>
                            <CustomPieChart data={data} xAxisKey="name" barKey="value" colors={colors} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card id='Homepage_card_graph'>
                        <Card.Body>
                            <h5 className='my-3'>Bar Charts</h5>
                            <CustomBarGraph data={data} xAxisKey="name" barKey="value" colors={colors} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default BarAndPie;