import axios from 'axios';

const baseurl = "https://api.dev.bitpaisaa.technotoil.com/";


export const homeExchangeAPI = baseurl + "user/home/exchange/coinPairs";


export const getAPIcall = async (endpoint, params = {}) => {
    try {
       
        const response = await axios.get(endpoint, {
            params, 
            headers: {
                'Content-Type': 'application/json',
              
            },
        });

       
        return response.data;
    } catch (error) {
        console.error('Error fetching data:');
        throw error;
    }
};
