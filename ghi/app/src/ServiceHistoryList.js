import './App.css'
import React from 'react'

class ServiceHistoryList extends React.Component{
    constructor() {
        super()
        this.state = {
            vin: "",
            appts: []
        }
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
    }
    handleVinChange(event) {
        const value = event.target.value
        this.setState({vin: value})
    }

    async handleSubmitClick(event) {
        event.preventDefault()
        const data = {...this.state}
        const submitUrl = `http://localhost:8080/api/service/history/${data.vin}/`
        const fetchConfig = {
            method: "GET",
            headers: {
                'Content-Type': 'application.json'
            }
        }
        const response = await fetch(submitUrl, fetchConfig)
        console.log(response)
        if (response.ok) {
            const history = await response.json()
            console.log("history", history)
            this.setState({appts: history})

        }
    }


render () {
    return (
        <div>
        <div className="input-group">
            <form onSubmit = { this.handleSubmitClick } id = "searchbar" className = "search-bar" >
                <input value = { this.state.vin } onChange = { this.handleVinChange } placeholder="Search VIN" name="VIN" required type="search" id="VIN" />
                <button className="btn btn-outline-primary">Search</button>
            </form>
        </div>
        <div>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>VIP Status</th>
                <th>VIN</th>
                <th>Owner</th>
                <th>Date</th>
                <th>Time</th>
                <th>Tech</th>
                <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            {this.state.appts.map(appt => {
            return (
                <tr key={appt.id}>
                    <td>{ String(appt.VIP) }</td>
                    <td>{ appt.vin }</td>
                    <td>{ appt.owner }</td>
                    <td>{ appt.date }</td>
                    <td>{ appt.time }</td>
                    <td>{ appt.tech.id }</td>
                    <td>{ appt.reason }</td>
                </tr>
            );
            })}
        </tbody>
        </table>
        </div>
        </div>
    );
    }
}

export default ServiceHistoryList;
