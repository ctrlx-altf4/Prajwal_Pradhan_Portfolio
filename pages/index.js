import React,{useState} from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import {Container, Row, Col} from 'reactstrap';
import ReactTyped from 'react-typed';
import axios from 'axios';


const Index=props=>{
  const {isAuthenticated,user}=props.auth;
  const [roles,setRoles]= useState(['Web Developer', 'React.js','Next.js','Node.js','Team Player'])
    return(
      <BaseLayout {...props.auth} className="cover" headerType="index" title="Prajwal Pradhan- Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
      
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && <span><b>{user.name}</b></span>}
                    Welcome to the portfolio website of Prajwal Pradhan.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <ReactTyped
                  loop
                  typeSpeed={100}
                  backSpeed={20}
                  strings={roles}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
}

export default Index;