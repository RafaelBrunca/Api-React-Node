const { error } = require("console");

async function runAPI(token) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
    try {                       //Fetch é o responsavél por fazer requisições
        const response = await fetch('https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/roupas', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        const responseData = await response.json();
        return responseData
    } catch(error) {
        console.log('Erro encontrado:', error)
    }
}

module.exports = { runAPI };