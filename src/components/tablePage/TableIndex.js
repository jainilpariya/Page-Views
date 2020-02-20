import React from 'react'
import history from '../../history'

class TableIndex extends React.Component {

    handleOnPage = () => {
        history.push('/tablePage')
    }

    handleOnInf = () => {
        history.push('/tableInf')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnPage}>Pagenation view</button>
                <button onClick={this.handleOnInf}>Infinite Scroll view</button>
            </div>
        )
    }
}

export default TableIndex