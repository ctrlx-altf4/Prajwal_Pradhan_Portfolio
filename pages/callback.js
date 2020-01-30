import React, {useEffect} from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import auth0Client from '../service/auth0';

import { useRouter } from 'next/router'


const Callback=()=>{
    const router = useRouter();
    
    async function handleAuth(){
        await auth0Client.handleAuthentication();
        router.push('/');
    }

    useEffect(()=>{
       handleAuth();
    })

       
    return(
        <BaseLayout>
            <BasePage>
                Verifying Data...
            </BasePage>
        </BaseLayout>
    )
}
export default Callback;