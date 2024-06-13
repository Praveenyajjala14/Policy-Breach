import './Roll.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Thublogo from './images/Thublogo.png';

function Roll
() {
    return (
        <Container>
            <img src={Thublogo} alt='Technical hub logo' className='logo'/ >
            <Row>
                <Col>
                    <div className='rollmain'>
                            <div>
                                <h3>Enter your Rollnumber</h3>
                                <label className='rollinput'>
                                    <input type='text' placeholder='Roll Number' />
                                </label>
                                <div className='rollbutton'>
                                <   button>Submit</button>
                                </div>
                            </div>
                            
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Roll;