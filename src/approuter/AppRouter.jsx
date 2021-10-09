import {React} from 'react'
import Footer from '../partials/Footer'
import Settings from '../pages/Settings';
import BuildHistory from '../pages/BuildHistory';
import HomeRoute from './HomeRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function AppRouter() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/settings" exact>
                        <Settings />
                    </Route>
                    <Route path="/build-history">
                        <BuildHistory />
                    </Route>
                    <Route path="/" exact>
                        <HomeRoute />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    )
}
