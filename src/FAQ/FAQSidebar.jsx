import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

// import FAQData from './FAQData';
// <FAQData {...props} />

const FAQSidebar = props => {
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="FAQ" defaultMessage="FAQ" />
        </h2>
      </header>

      <div>TODO FAQData</div>
    </Segment.Group>
  );
};

export default FAQSidebar;