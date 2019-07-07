import React from 'react';
import { Helmet } from 'react-helmet';
import Page from 'components/Page';

const About = props => (
  <Page {...props}>
    <Helmet>
      <title>About</title>
    </Helmet>
  </Page>
);

export default About;
