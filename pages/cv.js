import React from 'react';
import Link from 'next/link'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col} from 'reactstrap';

const CV = props =>{
    return(
        <BaseLayout {...props.auth}>
            <BasePage className="cv-page">
                <Row>
                    <Col md={{size:10, offset:1}}>
                        <iframe className="cv-viewer" src="/static/cv.pdf">

                        </iframe>
                        <div className="cv-title">
                            <a download="Prajwal_Cv.pdf" className="btn btn-success" href="/static/cv.pdf">
                                Download
                            </a>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default CV;