import { Row, Col } from 'react-bootstrap';
import CustomPieChart from '../../../screens/insights/CustomPieChart';
import CustomBarGraph from '../../../screens/insights/CustomBarGraph';

const PieAndBar = ({ data, colors }) => {
    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <CustomBarGraph data={data} xAxisKey="name" barKey="value" colors={colors} />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <CustomPieChart data={data} xAxisKey="name" barKey="value" colors={colors} />
                </Col>
            </Row>
        </div>
    );
}

export default PieAndBar;