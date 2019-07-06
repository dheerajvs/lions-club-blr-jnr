import React from 'react';
import { Helmet } from 'react-helmet';
import Page from 'components/Page';

const About = locals => (
  <Page path={locals.path}>
    <Helmet>
      <title>About</title>
    </Helmet>
  </Page>
);

export default About;
