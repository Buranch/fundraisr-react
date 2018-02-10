import React from 'react';
import { Route } from 'react-router-dom';
import OrgInfo from './routes/organisationInformation';

const Configure = ({match}) => (
  <div>
    <Route path={`${match.url}/organisation-info`} component={OrgInfo} />
    <Route path={`${match.url}/users`} component={OrgInfo} />
    <Route path={`${match.url}/field-manager`} component={OrgInfo} />
    <Route path={`${match.url}/payment-gateway`} component={OrgInfo} />
    <Route path={`${match.url}/mail-confirmations`} component={OrgInfo} />
    <Route path={`${match.url}/api-access`} component={OrgInfo} />
  </div>
);

export default Configure;
