import React from 'react'


class CreateModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            picture_url: "",
            manufacturer_id: "",
            manufacturers: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            this.setState({manufacturers: data.manufacturers})
        }
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.manufacturers
        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }

        const response = await fetch(modelUrl, fetchConfig);
        if(response.ok){
            this.setState({
                name: "",
                picture_url: "",
                manufacturer_id: "",
            })
            //     const CreateModelForm= await response.json();
            // console.log(CreateModelForm);

            // const cleared ={
            //     name: "",
            //     picture_url: "",
            //     manufacturers: [],
            // }
            // this.setState(cleared)
        }
    };


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Model</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="manufacturer">Add Model</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleInputChange} value={this.state.picture_url} placeholder="Picture" required type="text" name="picture_url" id="picture_url" className="form-control" />
                                    <label htmlFor="picture_url">Picture URL</label>
                                </div>
                                <div className="mb-3">
                                    <select onChange={this.handleInputChange} value={this.state.manufacturer_id} id="manufacturer_id" name="manufacturer_id" className="form-select">
                                        <option value="">Choose Manufacturer</option>
                                        {this.state.manufacturers.map(manufacturer_id => {
                                            return (
                                                <option key={manufacturer_id.id} value={manufacturer_id.id}>{manufacturer_id.name}</option>
                                            );
                                        })}
                                    </select>
                                        </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModelForm;
