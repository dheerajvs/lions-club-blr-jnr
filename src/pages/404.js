import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/Link';
import Page from 'components/Page';

const NotFound = props => (
  <Page {...props}>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <article>
      <header className="title">
        <h2>Sorry, the page you&apos;re looking for is not found</h2>
      </header>
      <p className="content">
        You may select links from the menu or click this button go to the home page.
      </p>
      <Link className="button is-primary" href="/">Go to home page</Link>
    </article>
  </Page>
);

export default NotFound;
