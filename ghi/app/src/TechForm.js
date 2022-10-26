import React from 'react'

class TechForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            employee_id: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        const techUrl = 'http://localhost:8080/api/service/tech/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
        const response = await fetch(techUrl, fetchConfig);
        if(response.ok){
                const newTech = await response.json();
            console.log(newTech);

            const cleared ={
                name: "",
                employee_id: "",
            }
            this.setState(cleared)
        }
    };


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new technician</h1>
                        <form onSubmit={this.handleSubmit} id="add-tech-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.employee_id} placeholder="Employee Id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                                <label htmlFor="id">Employee ID</label>
                            </div>
                            <button className="btn btn-primary" id="salesPersBtn">Enroll</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechForm;
