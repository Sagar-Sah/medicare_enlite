import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import BotPerformance from './BotPerformance';
import UserEngagement from './UserEngagement';
import BillingReport from './BillingReport';
import Reports from './Reports';

function ClientReports(props) {
  const title = `${brand.name} - Reports page`;
  const description = brand.desc;
  const { intl } = props;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div>
        <h1>Report and Performance Analytics Dashboard</h1>
        <BotPerformance />
        <UserEngagement />
        <BillingReport />
        <Reports />
      </div>
    </div>
  );
}

ClientReports.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(ClientReports);
