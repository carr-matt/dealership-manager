import React from 'react';


class ListSales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            };
        }

    async componentDidMount() {
        const url = 'http://localhost:8090/api/sales/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({sales: data.sales})
        }
    }

    render() {
        return(
            <div className="container">
                <h1>List Sales</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.sales.map(sales => {
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

export default ListSales;
