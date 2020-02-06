import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import axios from 'axios';
import Link from 'next/link'
import BasePage from '../components/BasePage';
import {Row, Col, Card, CardBody, CardHeader, CardText, CardTitle} from 'reactstrap';
import {getPortfolio,getPortfolioServer} from '../actions'


const BASE_URL = process.env.BASE_URL;
function renderPortfolios(portfolios){
    return portfolios.map((portfolio,index)=>{
        return(
                <Col md="4">
                    <React.Fragment key={index}>
                        <span>
                        <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                            <CardBody>
                            <p className="portfolio-card-city"> {portfolio.location}</p>
                            <CardTitle className="portfolio-card-title">{portfolio.company}</CardTitle>
                            <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                            <div className="readMore"> </div>
                            </CardBody>
                        </Card>
                        </span>
                    </React.Fragment>
                </Col>
        )
    })
}

 

const Portfolios=props=>{
    // const {portfolios}= props;
    const [portfolios, setPortfolios] = React.useState([]);
    React.useEffect(()=>{

        (async function sendData(){
            const res = await axios.get(`${BASE_URL}/api/portfolioApi/nul`);
            setPortfolios(res.data);
            console.log(res);
        })()
        
      },[])
    return(
        <BaseLayout {...props.auth} title="Prajwal Pradhan- Learn about my work and career">
            <BasePage title="Portfolio" className="portfolio-page">
                <Row>
                    {renderPortfolios(portfolios)}
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
// Portfolios.getInitialProps= async function(){
//     let portfolios=[];
//     try{
//         portfolios = await process.Browser? getPortfolio(): getPortfolioServer();
//         console.log(portfolios);
//     }
//     catch(err){
//         console.error(err);
//     }

//     return { portfolios};
// }

export default Portfolios;