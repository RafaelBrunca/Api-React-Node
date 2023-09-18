/*
const getToken = require('./tokenGen.js');

export async function refreshToken(refreshToken) {
    try {
        const response = await fetch('https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/auth/oauth/v2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: '7f522efb-d91e-4c6d-88ba-d8d545a4d379',
                client_secret: '80f65353-3565-4c5e-ab92-497376a3ba02',
                refresh_token: refreshToken 
            })
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }

        const responseBody = await response.json();
        const newAccessToken = responseBody.access_token;
        return newAccessToken;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

let currentAccessToken = null;

export async function getToken(username, password) {
    try {
        // Verifique se já temos um token de acesso e se ainda é válido
        if (currentAccessToken) {
            // Implemente uma função para verificar a validade do token de acesso
            const isTokenValid = await checkTokenValidity(currentAccessToken);

            if (isTokenValid) {
                return currentAccessToken;
            }
        }

        const refreshToken = await getRefreshToken(username, password);

        if (!refreshToken) {
            throw new Error('Failed to obtain Refresh Token');
        }

        currentAccessToken = await refreshToken(refreshToken);
        return currentAccessToken;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
*/