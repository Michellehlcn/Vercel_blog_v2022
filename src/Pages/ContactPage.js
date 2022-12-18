import React from 'react'
import ContactItem from '../Components/ContactItem';

import Title from '../Components/Title';
import { Container,Row,Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>

            
            <p> I am available for hire and open to any ideas of cooperation.</p>
               

                <Container fluid style={{ fontSize: '1rem'}}>

                 <Row>
                    <Col sm={2} >
                        <p>Email:  </p>
                    </Col>
                   <Col sm={8}>
                        <p>michellehlcn.au@gmail.com </p>
                    </Col>
                </Row>

                
                <Row>
                </Row>

                 <Row>
                    <Col sm={2} >
                        <p>Linkedin: </p>
                    </Col>
                   <Col sm={8}>
                        <p>huu-linh-chi-nguyen</p>
                    </Col>
                </Row>

                 <Row>
                    <Col sm={2} >
                        <p>Github: </p>
                    </Col>
                    <Col sm={8}>
                        <p>Michellehlcn </p>
                    </Col>
                </Row>
                </Container>   
        </div>
    )
}

export default ContactPage;
