import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout=(props)=>{
    const {className, children, isAuthenticated, user,title}=props;
    const headerType =props.headerType || "default"
    return(
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My Name is Prajwal Pradhan and I am an experienced web developer, programmer. I have Bachelor's degree in Computer Engineering from Pulchowk Engineering College"/>
                <meta name="keywords" content="Prajwal Pradhan, Prajwal Portfolio, Prajwal developer, Prajwal Programmer"/>
                <meta property="og:title" content="Prajwal Pradhan - Computer Engineer, Web Developer, Porgrammer"/>
                <meta proptery="og:locale" content="np_NP"/>
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:Description" content="My Name is Prajwal Pradhan and I am an experienced web developer, programmer."/>
                <link rel="icon" type="image/ico" href="/images/favicon.ico"/>
            </Head>
            <div className="layout-container">
                    <Header className={`port-nav-${headerType}`} isAuthenticated ={isAuthenticated} user={user}/>
                    <main className={`cover ${className}`}>
                        <div className="wrapper">
                            {children}
                        </div>
                    </main>
                </div>
        </React.Fragment>
    )
}

export default BaseLayout;