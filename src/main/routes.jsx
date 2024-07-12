import React from "react";
import { Route, Router, Redirect, hashHistory } from 'react-router'

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

export default props => (
    <Router history={hashHistory}>
        <Router path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)
