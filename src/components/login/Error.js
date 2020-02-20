import React from 'react'

const Error = ({touched, message}) => {
    if(!touched){
        return <div className="not_touched">Not touched yet</div>
    }
    if(message){
        return <div className="err">{message}</div>
    }
    return <div className="success">All good</div>
}

export default Error