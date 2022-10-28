import React from 'react';

class AutoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            models: [],
            vin: "",
            color: "",
            year: "",
            model_id: "",
    };
  }

  async componentDidMount() {
    const url = '	http://localhost:8100/api/models/';
    const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
      }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    }

  handleSubmit = async event => {
      event.preventDefault();
      const data = {...this.state};
      delete data.models;
      const automobileUrl = 'http://localhost:8100/api/automobiles/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          },
      };
      const automobileResponse = await fetch(automobileUrl, fetchConfig);
          if (automobileResponse.ok) {
              this.setState({
                  vin: "",
                  color: "",
                  year: "",
                  model_id: "",
        });
      }
  }

  render () {
    return (
      <>
      <div className="row">
      <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Add Vehicle to Inventory</h1>
          <form onSubmit={this.handleSubmit} id="add-inventory-form">
            <div className="form-floating mb-3">
              <input onChange={this.handleChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" value={this.state.vin}/>
              <label htmlFor="name">VIN</label>
            </div>
            <div className="form-floating mb-3">
            <select onChange={this.handleChange} name="model_id" id="model_id" required value={this.state.model_id} className="form-select">
              <option value="">Choose model</option>
              {this.state.models.map(model_id => {
                return (
                  <option key={model_id.id} value={model_id.id}>
                    {model_id.name}
                  </option>
                );
              })}
            </select>
            </div>
            <div className="form-floating mb-3">
                <input onChange={this.handleChange} placeholder="Year" required type="text"
                name="year" id="year" className="form-control" value={this.state.year}/>
                <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={this.handleChange} placeholder="Color" required type="text"
                name="color" id="color" className="form-control" value={this.state.color}/>
                <label htmlFor="color">Color</label>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
      </div>
      </div>
      </div>
      </>
        );
    }
}


export default AutoForm;
