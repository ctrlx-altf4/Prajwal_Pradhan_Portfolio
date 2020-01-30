import axios from 'axios';

export const getSecretData =async()=>{
    return await axios.get('/api/data')
            .then(response=>response.data);
}

export const getSecretDataServer = async()=>{
    return await axios.get('https://localhost:3000/api/data')
            .then(response =>response.data);
}

export const getPortfolio = async()=>{
    const res= await axios.get('/api/portfolioApi/nul')
                    .then(response =>response.data)
                    .catch(err=>err);
    console.log(res);

    return res;
}
export const getPortfolioServer = async()=>{
    const res= await axios.get('https://localhost:3000/api/portfolioApi/nul')
            .then(response =>response.data)
            .catch(err=>err);
    console.log(res);

    return res;
}

export const createPortfolio = async(portfolioData)=>{
    return await axios.post('https://localhost:3000/api/portfolioApi/nul',portfolioData)
}