import React from 'react';

class ManufacturerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
        };

    }
    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
        let response = await fetch(url)

        if(response.ok){
            let data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }

    render(){
        return
    }

}

export default ManufacturerList;
