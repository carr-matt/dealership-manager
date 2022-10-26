import React from 'react'

class AddSalesPersonFrom extends React.Component {
    constructor() {
        super()
        this.state = {
            name:'',
            employee_id: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
    }
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }



    render() {
        return  ()
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">

    }
    }
}
