import React from 'react'


class SalesPersonHistoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales: [],
            salesPersons: [],
            salesPerson: "",
            recordsFiltered: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ salesPerson: value}, () => {this.filteredfunction()} )
    }

    filteredfunction(){
        const result = this.state.sales.filter(sale => sale.sales_person.employee_id === Number(this.state.salesPerson))
        this.setState({recordsFiltered: result})
    }
    async componentDidMount() {

        const saleHistoryResponse = await fetch('http://localhost:8090/api/sales/')
        const salePersonsResponse = await fetch('http://localhost:8090/api/sales/person/')
        if (saleHistoryResponse.ok && salePersonsResponse.ok) {
            const salesData = await saleHistoryResponse.json();
            const personsData = await salePersonsResponse.json();

            this.setState({ salesPersons: personsData.sales_people});
            this.setState({ sales: salesData.sales, recordsFiltered: salesData.sales });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="mb-3">
                    <select onChange={this.handleInputChange} value={this.state.salesPerson} id="salesPerson" name="salesPerson" className="form-select">
                        <option value="">Select Sales Person</option>
                        {this.state.salesPersons.map(salesPerson => {
                            return (
                                <option key={salesPerson.employee_id} value={salesPerson.employee_id}>{salesPerson.name}</option>
                            );
                        })}
                    </select>
                </div>
                <h1>Sales person history</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Sale Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.recordsFiltered.map(sales => {
                            return (
                                <tr key={sales.id}>
                                    <td>{sales.sales_person.name}</td>
                                    <td>{sales.customer.name}</td>
                                    <td>{sales.automobile.vin}</td>
                                    <td>${sales.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        )
    }

}

export default SalesPersonHistoryList;
