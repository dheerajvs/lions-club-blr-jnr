import React from 'react';
import Page from 'components/Page';
import Link from 'components/Link';

const Index = props => {
  const {
    data: { officeBearers },
  } = props;
  const officersList = [officeBearers.slice(0, 4), officeBearers.slice(4, 8)];

  return (
    <Page {...props}>
      <article>
        <header className="title">
          <h2>Lions Club of Bangalore Jayanagar</h2>
          <hr />
        </header>
        <section className="section">
          <div className="box px-0 pt-0">
            <figure className="image">
              <img className="round-top" src="/img/club.jpg" alt="Club Photo" />
            </figure>
            <p className="p-4">
              Lions Club of Bangalore Jayanagar (LCBJ) District 317A was
              chartered in <time dateTime="1982-08-28">1982</time>.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-outlined" href="/about/">
                Learn More…
              </Link>
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

      <article className="has-background-primary py-6">
        <header className="title">
          <h2 className="has-text-light">Service Stories</h2>
          <hr />
        </header>
        <section className="slider-container">
          <div className="slider box px-0 pt-0">
            <figure className="image">
              <img
                className="round-top"
                src="/img/stories/eye.jpg"
                alt="Eye Campaign"
              />
            </figure>
            <p className="p-4">
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-info" href="#">
                Read More…
              </Link>
            </footer>
          </div>
          <div className="slider box px-0 pt-0">
            <figure className="image">
              <img
                className="round-top"
                src="/img/stories/eye.jpg"
                alt="Eye Campaign"
              />
            </figure>
            <p className="p-4">
              2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-info" href="#">
                Read More…
              </Link>
            </footer>
          </div>
          <div className="slider box px-0 pt-0">
            <figure className="image">
              <img
                className="round-top"
                src="/img/stories/eye.jpg"
                alt="Eye Campaign"
              />
            </figure>
            <p className="p-4">
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-info" href="#">
                Read More…
              </Link>
            </footer>
          </div>
        </section>

        <footer className="buttons is-centered">
          <Link className="button is-primary is-inverted is-outlined" href="#">
            Read More Stories
          </Link>
        </footer>
      </article>

      <article>
        <header className="title">
          <h2>Asha Deep Senior Citizen Home</h2>
          <hr />
        </header>
        <section className="section">
          <div className="box px-0 pt-0">
            <figure className="image">
              <img
                className="round-top"
                src="/img/ashadeep.jpg"
                alt="Asha Deep senior citizen home"
              />
            </figure>
            <p className="p-4">
              The <abbr title="Lions Club of Bangalore Jayanagar">LCBJ</abbr>{' '}
              Service Trust runs Asha Deep Senior Citizen Home, which is
              situated in Thathaguni, Kanakapura Road.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-primary" href="#">
                Read More…
              </Link>
            </footer>
          </div>
        </section>
      </article>

      <article className="has-background-primary py-6">
        <header className="title">
          <h2 className="has-text-light">Office Bearers</h2>
          <hr />
        </header>
        <section className="bearers columns is-centered is-mobile is-multiline is-gapless">
          {officersList.map((officers, index) => (
            <div key={index} className="column is-narrow">
              <table className="table">
                <tbody>
                  {officers.map(({ title, officer }) => (
                    <tr key={title}>
                      <td>{title}</td>
                      <td>{officer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>
        <footer className="buttons is-centered">
          <Link className="button is-primary is-inverted is-outlined" href="#">
            See all…
          </Link>
        </footer>
      </article>

      <article>
        <header className="title">
          <h2>How You Can Contribute</h2>
          <hr />
        </header>
        <section className="section">
          <div className="box px-0 pt-0">
            <p className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <footer className="buttons is-centered">
              <Link className="button is-primary" href="#">
                Learn More…
              </Link>
            </footer>
          </div>
        </section>
      </article>
    </Page>
  );
};

export default Index;
