import React from 'react'

const Worker = props => {
    return (
        <div>
            {this.props.worker.name}
            {this.props.worker.workleave}
            {this.props.worker.skills}
        </div>
    )
}

export default Worker;