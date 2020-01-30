import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth'
import PortfolioNewForm  from '../components/portfolio/portfolioNewForm';
import {Row,  Col } from 'reactstrap';
import {createPortfolio} from '../actions'
import axios from 'axios';

const CreateNewPortfolio = props =>{

    async function savePortfolio(portfolioInputData){

        portfolioInputData.userId="567890567890-";
        const portfolio = axios.post('http://localhost:3000/api/portfolioApi/nul',portfolioInputData).then((portfolio)=>portfolio);
            console.log(portfolio);
    }
    return(
        <BaseLayout {...props.auth}>
            <BasePage title="Create New Portfolio">
                <Row>
                    <Col md="6">
                    <PortfolioNewForm onSubmit={savePortfolio}/>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(CreateNewPortfolio,'siteOwner');