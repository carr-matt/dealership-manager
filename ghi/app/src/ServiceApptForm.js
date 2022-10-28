import React from 'react';


class ServiceForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner_name: "",
      appointment: "",
      tech_name: "",
      reason: "",
      vin: "",
      tech_names: [],
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/tech/';

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ tech_names: data.technicians })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    delete data.tech_names;
    const serviceUrl = 'http://localhost:8080/api/service/';
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    };

    const serviceResponse = await fetch(serviceUrl, fetchOptions);

    if (serviceResponse.ok) {

      const newService = await serviceResponse.json();
      console.log(newService)
      const cleared = {
        owner_name: "",
        appointment: "",
        tech_name: "",
        reason: "",
        vin: "",
      }
      this.setState(cleared);
    }
  }

  handleOwnerNameChange = (event) => {
    const value = event.target.value;
    this.setState({ owner_name: value })
  }
  handleAppointmentChange = (event) => {
    const value = event.target.value;
    this.setState({ appointment: value })
  }
  handleReasonChange = (event) => {
    const value = event.target.value;
    this.setState({ reason: value })
  }
  handleVinNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ vin: value })
  }
  handleTechnicianChange = (event) => {
    const value = event.target.value;
    this.setState({ tech_name: value })
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Schedule an Appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-appt-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleOwnerNameChange} value={this.state.owner_name} placeholder="Owner Name" required type="text" name="owner_name" id="owner_name"
                  className="form-control" />
                <label htmlFor="name">Owner Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleAppointmentChange} value={this.state.appointment} placeholder="Name" required type="datetime-local" name="appointment" id="appointment"
                  className="form-control" />
                <label htmlFor="name">Appointment</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="Name" required type="text" name="reason" id="reason"
                  className="form-control" />
                <label htmlFor="name">Reason</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleVinNumberChange} value={this.state.vin} placeholder="Name" required type="text" name="vin" id="vin"
                  className="form-control" />
                <label htmlFor="name">VIN</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleTechnicianChange} value={this.state.tech_name} required name="tech_name" id="tech_name" className="form-select">
                  <option value="">Technician</option>
                  {this.state.tech_names.map(tech_name => {
                    return (
                      <option key={tech_name.id} value={tech_name.tech_name}> {tech_name.tech_name} </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default ServiceForm