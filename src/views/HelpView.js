import React from 'react';
import Help from '../components/Help/Help'
import {} from 'reactstrap';

class HelpView extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log ('HelpView Mounted')
    }

    render() {
        return (
            "Hello World!"
        )
    }
}

export default HelpView;