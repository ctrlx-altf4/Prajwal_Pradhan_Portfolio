import data from './data.json';

import jwt from 'jsonwebtoken';
import axios from 'axios';

const namespace ='https://localhost:3000/';

const getJWKS=async()=>{
    const jwks =  await axios('https://ctrlx-altf4.auth0.com/.well-known/jwks.json')
                    .then(resolve =>resolve.data);
 
    return jwks;
}

const verifyToken=async(token)=>{
    if(token){
        const decodedToken = jwt.decode(token,{complete:true});
        if(!decodedToken){return undefineed};
        const jwks =  await getJWKS();
        const jwk = jwks.keys[0];

        //BUILD CERTIFICATE
        let cert = jwk.x5c[0];
        cert = cert.match(/.{1,64}/g).join('\n');
        cert =`-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`

        if(jwk.kid === decodedToken.header.kid){
            try{

                const verifiedToken = jwt.verify(token, cert);
                const expiresAt = verifiedToken.exp *1000;
                return (verifiedToken && new Date().getTime() < expiresAt)? verifiedToken : undefined;

            }
            catch(err){
                return  undefined;
            }
        }
    }
    return undefined;
}
const checkRole=(userRole, role)=>{
    if(userRole ===role){
        return true;
    }
    else return false;
}

const Data=async(req,res)=>{
    const verifiedToken = await verifyToken(req.cookies.jwt);
    const userRole = req.cookies.user && JSON.parse(req.cookies.user)[namespace+'role'];
    console.log(userRole);

    const isAuthenticated =!!verifiedToken;
    const isAuthorized = checkRole(userRole, 'admin');

    if(!isAuthenticated){
        res.status(401).send({"title":"Not Authenticated","details":"Login to get the data"});
    } else if(!isAuthorized){
        res.status(401).send({"title":"Not Authorized","details":"You don't have permission to access this data"});
    } else {
        res.status(200).json(data);
    }
}
export default Data

