import React from "react";

class ServiceApptForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: "",
            owner: "",
            date: "",
            time: "",
            tech: "",
            techs: [],
            reason: "",
        }

        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleOwnerChange = this.handleOwnerChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleTechChange = this.handleTechChange.bind(this)
        this.handleReasonChange = this.handleReasonChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleVinChange(event) {
        const value = event.target.value
        this.setState({vin: value})
    }
    handleOwnerChange(event) {
        const value = event.target.value
        this.setState({owner: value})
    }
    handleDateChange(event) {
        const value = event.target.value
        this.setState({date: value})
    }
    handleTimeChange(event) {
        const value = event.target.value
        this.setState({time: value})
    }
    handleTechChange(event) {
        const value = event.target.value
        this.setState({tech: value})
    }
    handleReasonChange(event) {
        const value = event.target.value
        this.setState({reason: value})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.techs
        console.log(data)
        const apptUrl = 'http://localhost:8080/api/service/appt/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(apptUrl, fetchConfig)

    if (response.ok) {
        const Appt = await response.json()
        console.log(Appt)

        const cleared = {
            vin: "",
            owner: "",
            date: "",
            time: "",
            tech: "",
            reason: "",
        }
        this.setState(cleared)
    }
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/service/tech/'

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({techs: data.techs })
        }
    }

render() {
    return (
<div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Schedule an Service Appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-appt-form">
                <div className="form-floating mb-3">
                <input value={this.state.vin} onChange={this.handleVinChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
                </div>
                <div className="form-floating mb-3">
                <input value={this.state.owner} onChange={this.handleOwnerChange} placeholder="owner" name="owner" type="text" id="owner" className="form-control"/>
                <label htmlFor="owner">Owner</label>
                </div>
                <div className="form-floating mb-3">
                <input value={this.state.date} onChange={this.handleDateChange} placeholder="date" name="date" type="date" id="date" className="form-control"/>
                <label htmlFor="date">Date</label>
                </div>
                <div className="mb-3">
                <div className="form-floating mb-3">
                <input value={this.state.time} onChange={this.handleTimeChange} placeholder="time" name="time" type="time" id="time" className="form-control"/>
                <label htmlFor="time">Time</label>
                </div>
                <div className="form-floating mb-3">
                <input value={this.state.reason} onChange={this.handleReasonChange} placeholder="reason" name="color" type="text" id="reason" className="form-control"/>
                <label htmlFor="reason">Reason for Service</label>
                </div>
                <select onChange={this.handleTechChange} required id="tech" name="tech" className="form-select">
                    <option value="">Choose a Tech</option>
                    {this.state.techs.map(tech => {
                    return (
                        <option key={tech.id} value={tech.id}>{tech.name}
                        </option>
                    )
                    })}
                </select>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
    }
}

export default ServiceApptForm
