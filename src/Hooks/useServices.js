import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [])
    return [services, setServices, loader];

}
export default useServices;