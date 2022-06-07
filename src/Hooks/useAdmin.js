import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;

        if (email) {
            const url = `https://tranquil-tor-96157.herokuapp.com/admin/${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(result => {
                    const getAdmin = result.admin;
                    setAdmin(getAdmin);
                })
        }


    }, [user])

    return [admin];
}
export default useAdmin;