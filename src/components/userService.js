import axios from 'axios';

export const getUserName = async () => {
    const idToken = sessionStorage.getItem('idToken');

    if (!idToken) {
        console.log('no token');
    }

        const response = await fetch('http://localhost:8083/api/auth/getusername', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json'
            }
        });

        const userName = await response.text();
        return userName;
}