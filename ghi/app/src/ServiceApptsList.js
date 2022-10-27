import React from 'react';

class ServiceApptsList extends React.Component{
    constructor() {
        super()
        this.state = {
            "appts": []
        }
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleFinishClick = this.handleFinishClick.bind(this)
    }
async componentDidMount() {
    this.showAppointments()

}
async showAppointments() {
    const url = 'http://localhost:8080/api/service/appt/'
    let response = await fetch(url)

    if (response.ok) {
        let data = await response.json()
        let filteredData = await data.appts.filter(appt => appt.finished !== true)
        this.setState({"appts": filteredData})
    }
}



async handleDeleteClick(event) {
    console.log('remove')
    const id = event.target.value
    const url = `http://localhost:8080/api/appt/${id}/`
    const fetchConfig = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application.json'
        }
    }
    const response = await fetch(url, fetchConfig)
    if (response.ok) {
        this.setState({appts: this.state.appts.filter(appt => appt.id !== id)})
        alert("Appointment Deleted")
    }
}


async handleFinishClick(event) {
    const id = event.target.value
    const url = `http://localhost:8080/api/appt/${id}/`
    const fetchConfig = {
        method: "PUT",
        body: JSON.stringify({
            "finished": true
        }),
        headers: {
            'Content-Type': 'application.json'
        }
    }
    const response = await fetch(url, fetchConfig)
    if (response.ok) {
        this.showAppointments()
        alert("Appointment Finished")
    }
}


render () {
    return (
        <div>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>VIP Status</th>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
            <th></th>
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
                <td>{ appt.tech.name }</td>
                <td>{ appt.reason }</td>
                <td><button onClick={ this.handleDeleteClick} value = {appt.id} className="btn btn-outline-danger btn-sm">Cancel</button></td>
                <td><button onClick={ this.handleFinishClick} value = {appt.id} className="btn btn-outline-danger btn-sm">Finish</button></td>
                </tr>
            );
            })}
        </tbody>
        </table>
        </div>
    );
    }
}

export default ServiceApptsList;
