import React from 'react';
// import Outlet from "react-router-dom";


class ServiceApptsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      services: [],
    };
  }

  async componentDidMount() {
    const servicesUrl = 'http://localhost:8080/api/service/appt';
    const response = await fetch(servicesUrl);
    if (response.ok) {
      const data = await response.json();
      this.setState({ services: data.services })
    }
  }

  handleOnRemove = async (event) => {
    const id = event.target.value;
    const serviceUrl = `http://localhost:8080/api/service/appt/${id}/`;
    const fetchConfig = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      this.setState({
        services: this.state.services.filter(service => service.id != id)
      })
    }
  }

  handleFinished = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    delete data.services;

    const id = event.target.value;
    const serviceUrl = `http://localhost:8080/api/service/appt/${id}/`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify({ finished: true }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(serviceUrl, fetchConfig);

    if (response.ok) {
      this.setState({
        services: this.state.services.filter(service => service.id != id)
      })
    }

  }


  render() {

    return (
      <>
        <div className="my-5 container">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>VIP</th>
                <th>VIN</th>
                <th>Owner</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Cancel/Finish</th>
              </tr>
            </thead>

            <tbody>
              {this.state.services.map(service => {
                return !service.finished && (
                  <tr key={service.id}>
                    {service.vip ? <td>VIP</td> : <td>NOT VIP</td>}
                    <td>{service.vin}</td>
                    <td>{service.owner_name}</td>
                    <td>{new Date(service.appointment).toLocaleDateString()}</td>
                    <td>{new Date(service.appointment).toLocaleTimeString()}</td>
                    <td>{service.tech_name.tech_name}</td>
                    <td>{service.service_name}</td>
                    <td>
                      <button onClick={this.handleOnRemove} value={service.id} className="btn btn-danger btn-sm">CANCEL</button>
                      <button onClick={this.handleFinished} value={service.id} className="btn btn-success btn-sm">FINISH</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
        {/* <Outlet /> */}
      </>
    )
  }
}


export default ServiceApptsList