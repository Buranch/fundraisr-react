import React from 'react';
import { Route } from 'react-router-dom';
import OrgInfo from './routes/organisationInformation';
import ApiAccess from './routes/apiAccess';
import PaymentGateway from './routes/paymentGateway';
import Users from './routes/users';
import MailConf from './routes/mailConfirmations';

const Configure = ({match}) => (
  <div>
    <Route path={`${match.url}/organisation-info`} component={OrgInfo} />
    <Route path={`${match.url}/users`} component={Users} />
    <Route path={`${match.url}/field-manager`} component={OrgInfo} />
    <Route path={`${match.url}/payment-gateway`} component={PaymentGateway} />
    <Route path={`${match.url}/mail-confirmations`} component={MailConf} />
    <Route path={`${match.url}/api-access`} component={ApiAccess} />
  </div>
);

export default Configure;
