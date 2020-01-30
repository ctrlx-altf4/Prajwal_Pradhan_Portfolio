import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth'

const Owner = props =>{
    return(
        <BaseLayout {...props.auth}>
            <BasePage>
                I am the Owner of the page
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(Owner,'siteOwner');