import React, { useState, useEffect } from 'react';

const useUser = user => {

    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const curentUser = { email: email };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(curentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const newAccessToken = data.accesssToken;
                    localStorage.setItem('accessToken', newAccessToken);
                    setToken(newAccessToken);
                })
                .catch(err => {
                    console.log('my error', err);
                })
        }


    }, [user])

    return [token];





}
export default useUser;