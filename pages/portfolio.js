import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import { useRouter } from 'next/router'


const Portfolio=props=>{
    const {posts}= props;
    const router = useRouter();
    return(
        <BaseLayout {...props.auth}>
            <h1>{router.query.id}</h1>
        </BaseLayout>
    )
}

export default Portfolio;