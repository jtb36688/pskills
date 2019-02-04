import React from 'react';
import EmployerHome from '../components/Employer/EmployerHome'
import {} from 'reactstrap';


class EmployerView extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('EmployerView Mounted')
    }
    render() {
        return (
            <EmployerHome prisonsarray={this.props.prisonsarray} />
        )
    }
}

export default EmployerView;