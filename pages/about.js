import React from 'react';
import Link from 'next/link'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import {Row, Col} from 'reactstrap';

const About=(props)=>{
    return(
     <BaseLayout {...props.auth}>
        <BasePage className="about-page">
            <Row className="mt-5">
                <Col md="6">
                    <div className="left-side">
                        <h1 className="title fade-in">Hello, Namaste! </h1>
                        <h4 className="subtitle fade-in">Welcome to my about page</h4>
                        <p className="sub-subtitle fade-in">Learn about me</p> 
                    </div>
                </Col>
                <Col md="6">
                    <div className="fade-in textJustified">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                        <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             an unknown printer took a galley of type and scrambled it to make a type specimen
                              book.
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             an unknown printer took a galley of type and scrambled it to make a type specimen
                              book.
                        </p>

                    </div>
                </Col>
            </Row>

        </BasePage>
     </BaseLayout>
    )
}
export default About;