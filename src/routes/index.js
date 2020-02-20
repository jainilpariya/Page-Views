import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Login from '../components/login/Login'
import TablePage from '../components/tablePage/TablePage'
import TableIndex from '../components/tablePage/TableIndex'
import TableInf from '../components/tablePage/TableInf'
import '../app.css'

// const Routes = () => {
class Routes extends React.Component {

    render() {
        console.log('match', this.props.match)
        return (
            <>
                <Router history={history}>
                    <div className="content">
                        <button onClick={() => { history.push('/') }}>Login</button>
                        <button onClick={() => { history.push('/tableIndex') }}>Table</button>
                        <hr />
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/tableIndex" exact component={TableIndex} />
                            <Route path="/tablePage" exact component={TablePage} />
                            <Route path="/tableInf" exact component={TableInf} />
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}
// }

export default Routes