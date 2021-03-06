import React from 'react';
import { Route } from 'react-router-dom';
import OrgInfo from './routes/organizationInformation';
import ApiAccess from './routes/apiAccess';
import PaymentGateway from './routes/paymentGateway';
import Users from './routes/users';
import MailConf from './routes/mailConfirmations';
import FieldMan from './routes/fieldManager';

const Configure = ({match}) => (
  <div>
    <Route path={`${match.url}/organization-info`} component={OrgInfo} />
    <Route path={`${match.url}/users`} component={Users} />
    <Route path={`${match.url}/field-manager`} component={FieldMan} />
    <Route path={`${match.url}/payment-gateway`} component={PaymentGateway} />
    <Route path={`${match.url}/mail-confirmations`} component={MailConf} />
    <Route path={`${match.url}/api-access`} component={ApiAccess} />
  </div>
);

export default Configure;
