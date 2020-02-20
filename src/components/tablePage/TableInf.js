import React from "react"
import Data from './Data'
import InfiniteScroll from "react-infinite-scroll-component"
import { connect } from 'react-redux'
import './table.css'

class TableInf extends React.Component {
    state = {
        items: Array.from({ length: this.props.count }),
        hasMore: true
    };

    fetchMoreData = () => {
        if (this.state.items.length >= this.props.total) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: this.props.count }))
            });
        }, 500);
    };

    printDivInfinite = () => {
        var divContents = document.getElementById("infinite").innerHTML;
        var a = window.open('', '', 'height=500, width = 500');
        a.document.write('<html>');
        a.document.write('<body > <h1>Div contents are <br>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }

    render() {
        return (
            <div id="infinite">
                <h1>Infinite scroll view</h1>
                <button onClick={this.printDivInfinite}>Print</button>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <table className="table-main">
                        <thead className="table-row">
                            <tr>
                                <th colSpan="2" className="table-head">Name</th>
                                <th colSpan="4" className="table-head">Info</th>
                            </tr>
                            <tr>
                                <th className="table-head">First Name</th>
                                <th className="table-head">Last Name</th>
                                <th className="table-head">Age</th>
                                <th className="table-head">Visits</th>
                                <th className="table-head">Progress</th>
                                <th className="table-head">Status</th>
                            </tr>
                        </thead>
                        <tbody className="table-row">
                            {this.state.items.map((i, index) => (
                                <tr>
                                    <td className="table-data">{Data[index].firstName}</td>
                                    <td className="table-data">{Data[index].lastName}</td>
                                    <td className="table-data">{Data[index].age}</td>
                                    <td className="table-data">{Data[index].visits}</td>
                                    <td className="table-data">{Data[index].progress}</td>
                                    <td className="table-data">{Data[index].status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        )
    }
}
// export default TableInf

const mapStateToProps = ({ total, count }) => {
    return {
        total,
        count
    }
}

export default connect(mapStateToProps)(TableInf)