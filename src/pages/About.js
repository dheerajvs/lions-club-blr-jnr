import React from 'react';
import { Helmet } from 'react-helmet';
import Page from 'components/Page';
import Link from 'components/Link';
import { Mjf, Pmjf } from 'components/Suffixes';

const About = props => (
  <Page {...props}>
    <Helmet>
      <meta
        name="description"
        content="About Lions Club of Bangalore Jayanagar"
      />
      <title>About</title>
    </Helmet>
    <article>
      <header className="title">
        <h2>About Lions Club of Bangalore Jayanagar</h2>
        <hr />
      </header>
      <section className="section">
        <div className="box px-0 pt-0">
          <figure className="image">
            <img className="round-top" src="/img/club.jpg" alt="Club Photo" />
          </figure>
          <p className="p-4">
            Lions Club of Bangalore Jayanagar (LCBJ) District 317A was chartered
            in <time dateTime="1982-08-28">1982</time> with Lion G. R. Nataraj{' '}
            <Pmjf /> as charter president. We now have two more charter members
            Lion Dr. P. K. Satyanarayan and Lion H. B. Shivakumar <Mjf />.
          </p>
          <p className="p-4">
            The club has enabled more than 1.25 lakhs of Intraocular Lens (IOL)
            implants for cataract surgeries and more than 1 lakh blood units
            drawn over the last 35 years.
          </p>
          <p className="p-4">
            We have also sponsored Lions clubs of Mahanagar, J. P. Nagar, J. P.
            Nagar Ethics, Yelachenahalli, Jayanagar North, Raghuvanahalli,
            Chandra layout, Jyana yoga, Machohalli, Leo Club of Bangalore J. P.
            Nagar.
          </p>
          <p className="p-4">
            <strong>Lions Club of Bangalore Jayanagar Service Trust</strong> was
            established in the year 1993 with a view to run permanent projects.
          </p>
          <footer className="buttons is-centered">
            <Link className="button is-primary" href="#">
              Join us
            </Link>
            <Link className="button is-info" href="#">
              Donate
            </Link>
          </footer>
        </div>
      </section>
    </article>
  </Page>
);

export default About;
