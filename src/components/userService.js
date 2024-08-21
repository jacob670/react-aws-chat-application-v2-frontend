import axios from 'axios';

export const getUserName = async () => {
    const idToken = sessionStorage.getItem('idToken');

    if (!idToken) {
        console.log('no token');
    }

    const response = await fetch('http://localhost:8083/api/auth/getUserProperties', {
        method: 'GET',
        headers: {
            'Authorization': idToken,
            'Content-Type': 'application/json'
        }
    });

    const userDataJson = await response.text();
    const user = JSON.parse(userDataJson);

    return user.userName;
}