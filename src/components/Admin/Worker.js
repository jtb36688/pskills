import React from 'react'

const Worker = props => {
    return (
        <div>
            <p className='text'>{props.worker.name}</p>
            <p className='text'>{props.worker.availability}</p>
            <p className='text'>{props.worker.skills}</p>
        </div>
    )
}

export default Worker;