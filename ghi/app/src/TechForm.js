import React from 'react';


class TechForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tech_name: '',
            employee_num: '',
        }
    }

    handleCreate = async (event) => {
        event.preventDefault();
        const data = { ...this.state };
        const technicianUrl = 'http://localhost:8080/api/tech/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(technicianUrl, fetchConfig);

        if (response.ok) {
            const cleared = {
                tech_name: '',
                employee_num: '',
            }
            this.setState(cleared);
        }
    }

    handleTechNameChange = (event) => {
        const value = event.target.value;
        this.setState({ tech_name: value })
    }

    handleEmployeeNumChange = (event) => {
        const value = event.target.value;
        this.setState({ employee_num: value })
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Enroll a Technician</h1>
                            <form onSubmit={this.handleCreate} id="add-tech-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleTechNameChange} value={this.state.tech_name} placeholder="Owner Name" required type="text" name="tech_name" id="tech_name"
                                        className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleEmployeeNumChange} value={this.state.employee_num} placeholder="Name" required type="text" name="employee_num" id="employee_num"
                                        className="form-control" />
                                    <label htmlFor="name">Employee Number</label>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default TechForm