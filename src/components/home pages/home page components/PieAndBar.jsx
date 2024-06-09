import { Row, Col } from 'react-bootstrap';
import CustomPieChart from '../../../Pages/insights/CustomPieChart';
import CustomBarGraph from '../../../Pages/insights/CustomBarGraph';

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