import { Form, Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const ChangePasswordDoctor = () => {
    const navigate = useNavigate()
    function changepassword() {
        navigate('/home/doctor_list/doctorprofiledisplay/doctorprofile_edit')
    }

    function cancel() {
        navigate('/home/doctor_list/doctorprofiledisplay')
    }

    return (
        <Card className='p-lg-4'>
            <div className="profile-title">Change Password</div>
            <Card.Body>
                <Card.Text className='d-flex flex-column gap-4'>
                    <Form.Control
                        type="text"
                        placeholder="Enter Old Password"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter New Password"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter New Password Again"
                    />
                </Card.Text>
                <div className='d-flex gap-2 mt-4'>
                    <Button variant="primary" onClick={() => changepassword()}>Submit</Button>
                    <Button variant="secondary" onClick={() => cancel()} >Cancel</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ChangePasswordDoctor
