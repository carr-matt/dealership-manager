import React, { useState, useEffect } from 'react';



function ServiceHistoryList() {
    const [servicesData, setService] = useState([]);
    const [inputVin, setInputVin] = useState("");
    const [vin, setVin] = useState([]);


    const fetchService = async () => {
        const url = 'http://localhost:8080/api/service';
        const response = await fetch(url)
        const servicesJson = await response.json();
        setService(servicesJson.services)
    }

    useEffect(() => {
        fetchService()
    }, []);


    const handleSearch = (event) => {
        event.preventDefault();
        const searchedVin = servicesData.filter(service => service.vin === inputVin);
        setVin(searchedVin);
    }


    return (
        <>
            <div className="my-5 container">
                <form onSubmit={handleSearch} id="vin-search-form">
                    <div className="form-floating mb-3 input-group">
                        <input onChange={event => setInputVin(event.target.value)} value={inputVin} placeholder="VIN" id="vin" type="text" name="vin"
                            className="form-control" />
                        <span className="input-group-text"><button className="btn">
                            Search VIN</button>
                        </span>
                    </div>
                </form>
                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vin.map((service) => {
                            return (
                                <tr key={service.id}>
                                    <td>{service.vin}</td>
                                    <td>{service.owner_name}</td>
                                    <td>{new Date(service.appointment).toLocaleDateString()}</td>
                                    <td>{new Date(service.appointment).toLocaleTimeString()}</td>
                                    <td>{service.tech_name.tech_name}</td>
                                    <td>{service.reason}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </>
    )
}


export default ServiceHistoryList