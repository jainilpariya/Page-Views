import React from 'react'
import Data from './Data'
import { connect } from 'react-redux'
import { nextPage, prevPage, firstPage, lastPage, goToPage } from '../../reducer/table/actions/index'
import { debounce } from 'lodash'
import './table.css'

class TablePage extends React.Component {

    tabledata(pg, ct, tot) {
        let start = (pg - 1) * ct
        let end = ((pg - 1) * ct + ct) >= tot ? tot - 1 : ((pg - 1) * ct + ct)
        let arr = Data.slice(start, end)
        return (
            arr.map((item) => {
                return(
                    <>
                        <tr>
                            <td className="table-data">{item.firstName}</td>
                            <td className="table-data">{item.lastName}</td>
                            <td className="table-data">{item.age}</td>
                            <td className="table-data">{item.visits}</td>
                            <td className="table-data">{item.progress}</td>
                            <td className="table-data">{item.status}</td>
                        </tr>
                    </>
                )
            })
        )
    }

    onClickNextPage = () => {
        this.props.nextPage(this.props.pageNo)
    }

    onClickPrevPage = () => {
        this.props.prevPage(this.props.pageNo)
    }

    onClickFirstPage = () => {
        this.props.firstPage()
    }

    onClickLastPage = () => {
        this.props.lastPage(this.props.total, this.props.count)
    }

    handleDisablePrev = () => {
        let pg = this.props.pageNo
        if (pg > 1) return false
        else return true
    }

    handleDisableNext = () => {
        let pg = this.props.pageNo
        let ct = this.props.count
        let tot = this.props.total
        if (pg === Math.ceil(tot / ct)) return true
        else return false
    }

    handleOnChange = debounce((val) => {
        let ct = this.props.count
        let tot = this.props.total
        let v = Number(val)
        if (v > 0 && v <= Math.ceil(tot / ct)) {
            this.props.goToPage(v)
        }
        else {
            return <div>Please enter a valid page number.</div>
        }
    }, 300)

    handleDebouncedInputChange = (e) => {
        this.handleOnChange(e.target.value)
    }

    printDivPagination = () => {
        var divContents = document.getElementById("pagination").innerHTML;
        var a = window.open('', '', 'height=500, width = 500');
        a.document.write('<html>');
        a.document.write('<body > <h1>Div contents are <br>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }

    render() {
        let pg = this.props.pageNo
        let ct = this.props.count
        let tot = this.props.total
        return (
            <div id="pagination">
                <h1>Pagination View</h1>
                <button onClick={this.printDivPagination}>Print</button>
                <hr />
                <table className="table-main">
                    <thead>
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
                    <tbody>
                        {this.tabledata(pg, ct, tot)}
                    </tbody>
                </table>
                <div>
                    <button onClick={this.onClickFirstPage}>First Page</button>
                    <button onClick={this.onClickPrevPage} disabled={this.handleDisablePrev()}>Previous Page</button>
                    <input id="ip1" onChange={this.handleDebouncedInputChange} defaultValue={pg}></input>
                    <button onClick={this.onClickNextPage} disabled={this.handleDisableNext()}>Next Page</button>
                    <button onClick={this.onClickLastPage}>Last Page</button>
                </div>
                <div> 
                    Displaying page : {pg}, total entries : {tot}, per page : {ct}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ pageNo, count, total }) => {
    return {
        pageNo,
        count,
        total
    }
}

export default connect(
    mapStateToProps,
    { firstPage, lastPage, nextPage, prevPage, goToPage }
)(TablePage)

