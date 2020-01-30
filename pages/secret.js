import React,{useState, useEffect} from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import axios from 'axios';
import { getSecretData, getSecretDataServer } from '../actions';


class Secret extends React.Component{
    constructor(props){
        super();

        this.state ={data:[]};
    }

    static async getInitialProps(){
        const res = await process.Browser? getSecretData(): getSecretDataServer();

        return {res};
    }
    async componentDidMount(){
        const res= await getSecretData();
        this.setState({data:res});
    }

    displayData(){
        const {data}=this.state;
        if(data && data.length >0){
            return (
                data.map((dat,index)=>{
                return (
                    <div key={index}>
                        {dat.name}
                        {dat.surname}
                    </div>
                )
            })
            )
        }
        return null;
    }
   
    render(){
        return(
            <BaseLayout {...this.props.auth}>
                <BasePage>
                I am from Secrets
                Data received;
                {this.displayData()
                }
                </BasePage>
            </BaseLayout>
        )
    }
}
export default withAuth(Secret,'siteOwner');