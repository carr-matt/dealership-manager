import React from 'react'


class SaleRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobiles: [],
            automobile: '',
            salesPersons: [],
            salesPerson: '',
            customers: [],
            customer: '',
            price: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }
    //CHECK URL PATHS- NEED TO
    async componentDidMount() {
        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const saleUrl = 'http://localhost:8090/api/sales/person/'
        const customerUrl = 'http://localhost:8090/api/sales/customer/'
        let autoResponse = await fetch(autoUrl)
        let saleResponse = await fetch(saleUrl)
        let customerResponse = await fetch(customerUrl)
        if(autoResponse.ok && saleResponse.ok && customerResponse.ok){
            let autoData = await autoResponse.json();
            let saleData = await saleResponse.json();
            let customerData = await customerResponse.json();
            this.setState({automobiles: autoData.automobiles})
            this.setState({salesPersons: saleData.salesPerson})
            this.setState({customers: customerData.customers})
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        const newSaleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
    }
}
    export default SaleRecordForm;
