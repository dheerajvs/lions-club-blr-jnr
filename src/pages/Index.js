import React from 'react';

const Index = () => (
  <>
    <div className="columns is-centered is-variable is-0-mobile is-2-tablet is-3-desktop">
      <nav
        className="main-nav column is-one-quarter is-one-fifth-desktop"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="columns is-centered is-mobile is-hidden-tablet">
          <button
            className="hamburger button is-medium is-primary is-absolute"
            aria-label="menu"
            aria-expanded="false"
            data-show="quickview"
            data-target="quickviewDefault"
          >
            <span className="icon has-text-info">
              <i className="fas fa-bars" />
            </span>
          </button>
          <a className="column is-narrow" href="/">
            <img src="/img/lci-logo.svg" alt="Logo" width="60" />
          </a>
        </div>

        <div id="quickviewDefault" className="quickview is-left is-marginless">
          <header className="quickview-header columns is-centered is-mobile is-marginless">
            <a className="column is-narrow" href="/">
              <img src="/img/lci-logo.svg" alt="Logo" width="60" />
            </a>
            <button
              className="close-btn button is-large is-white is-hidden-tablet"
              data-dismiss="quickview"
            >
              <span className="icon has-text-primary">
                <i className="fas fa-times" />
              </span>
            </button>
          </header>

          <div className="quickview-body">
            <div className="menu">
              <ul className="menu-list">
                <li>
                  <a className="is-active" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">
                    About{' '}
                    <abbr title="Lions Club of Bangalore Jayanagar">LCBJ</abbr>
                  </a>
                </li>
                <li>
                  <a href="">Service Stories</a>
                </li>
                <li>
                  <a href="">Asha Deep Senior Citizen Home</a>
                </li>
                <li>
                  <a href="">Contributing</a>
                </li>
                <li>
                  <a href="">
                    <abbr title="Corporate Social Responsibility">CSR</abbr>
                  </a>
                </li>
                <li>
                  <a href="">Office Bearers</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
          </div>

          <footer className="quickview-footer">
            <div className="buttons is-centered">
              <a className="button is-primary" href="#">
                Join us
              </a>
              <a className="button is-info" href="#">
                Donate
              </a>
            </div>
          </footer>
        </div>
      </nav>

      <main className="column is-half is-three-fifths-desktop tablet-width">
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
                Lions Club of Bangalore Jayanagar (LCBJ) district 317A was
                chartered in
                <time dateTime="1982-08-28">1982</time>.
                <a className="button is-small is-light" href="#">
                  Learn More…
                </a>
              </p>
              <footer className="buttons is-centered">
                <a className="button is-primary" href="#">
                  Join us
                </a>
                <a className="button is-info" href="#">
                  Donate
                </a>
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
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer className="buttons is-centered">
                <a className="button is-info" href="#">
                  Read More…
                </a>
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
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer className="buttons is-centered">
                <a className="button is-info" href="#">
                  Read More…
                </a>
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
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <footer className="buttons is-centered">
                <a className="button is-info" href="#">
                  Read More…
                </a>
              </footer>
            </div>
          </section>

          <footer className="buttons is-centered">
            <a className="button is-primary is-inverted is-outlined" href="#">
              Read More Stories
            </a>
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
                The <abbr title="Lions Club of Bangalore Jayanagar">LCBJ</abbr>
                Service Trust runs Asha Deep Senior Citizen Home, which is
                situated in Thathaguni, Kanakapura Road.
              </p>
              <footer className="buttons is-centered">
                <a className="button is-primary" href="#">
                  Read More…
                </a>
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
            <div className="column is-narrow">
              <table className="table">
                <tbody>
                  <tr>
                    <td>President</td>
                    <td>Manjunath K S</td>
                  </tr>
                  <tr>
                    <td>&#x2160; Vice President</td>
                    <td>Vijayakumar A</td>
                  </tr>
                  <tr>
                    <td>&#x2161; Vice President</td>
                    <td>Mallikarjun H R</td>
                  </tr>
                  <tr>
                    <td>&#x2162; Vice President</td>
                    <td>Gundappa Ramesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-narrow">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Secretary</td>
                    <td>C S Raghavan</td>
                  </tr>
                  <tr>
                    <td>Joint Secretary</td>
                    <td>H R Keshava</td>
                  </tr>
                  <tr>
                    <td>Treasurer</td>
                    <td>Mallikarjun H R</td>
                  </tr>
                  <tr>
                    <td>Administrator</td>
                    <td>Sowmya B A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <footer className="buttons is-centered">
            <a className="button is-primary is-inverted is-outlined" href="#">
              See all…
            </a>
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
                <a className="button is-primary" href="#">
                  Learn More…
                </a>
              </footer>
            </div>
          </section>
        </article>
      </main>

      <aside className="lci column is-one-quarter is-one-fifth-desktop">
        <section className="box">
          <header className="title is-5">
            <h2>Lions Club International</h2>
            <hr />
          </header>
          <div className="menu">
            <p className="menu-label">News</p>
            <ul className="menu-list">
              <li>
                <a
                  href="https://www.lionsclubs.org/en/resources-for-members/resource-center/global-action-team"
                  target="_blank"
                  rel="noopener"
                >
                  Your Global Action Team
                </a>
              </li>
              <li>
                <a
                  href="https://lcicon.lionsclubs.org/"
                  target="_blank"
                  rel="noopener"
                >
                  Attend LCICon in Milan
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/donate"
                  target="_blank"
                  rel="noopener"
                >
                  Donate to Campaign 100
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/footer/lion-magazine"
                  target="_blank"
                  rel="noopener"
                >
                  Read LION Magazine
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/explore-our-clubs/our-global-causes"
                  target="_blank"
                  rel="noopener"
                >
                  Explore Our Global Causes
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/discover-our-clubs/our-leaders"
                  target="_blank"
                  rel="noopener"
                >
                  Meet Our Leaders
                </a>
              </li>
            </ul>
            <p className="menu-label">Resources</p>
            <ul className="menu-list">
              <li>
                <a
                  href="https://www.lionsclubs.org/"
                  target="_blank"
                  rel="noopener"
                >
                  Lions Clubs International
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/discover-our-foundation/mission"
                  target="_blank"
                  rel="noopener"
                >
                  LCIF
                </a>
              </li>
              <li>
                <a
                  href="https://www.lionsclubs.org/en/resources-for-members/resource-center"
                  target="_blank"
                  rel="noopener"
                >
                  Resource Center
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/lionsclubs"
                  target="_blank"
                  rel="noopener"
                >
                  Lions Videos
                </a>
              </li>
            </ul>
            <p className="menu-label">Connect</p>
            <div className="social-btns buttons">
              <a
                className="button has-text-grey"
                href="https://www.facebook.com/lionsclubs"
                target="_blank"
                rel="noopener"
                title="Facebook"
              >
                <span className="icon">
                  <i className="fab fa-facebook-f" />
                </span>
              </a>
              <a
                className="button has-text-grey"
                href="https://twitter.com/lionsclubs"
                target="_blank"
                rel="noopener"
                title="Twitter"
              >
                <span className="icon">
                  <i className="fab fa-twitter" />
                </span>
              </a>
              <a
                className="button has-text-grey"
                href="https://instagram.com/lionsclubs"
                target="_blank"
                rel="noopener"
                title="Instagram"
              >
                <span className="icon">
                  <i className="fab fa-instagram" />
                </span>
              </a>
              <a
                className="button has-text-grey"
                href="https://www.youtube.com/user/lionsclubsorg"
                target="_blank"
                rel="noopener"
                title="YouTube"
              >
                <span className="icon">
                  <i className="fab fa-youtube" />
                </span>
              </a>
              <a
                className="button has-text-grey"
                href="https://www.linkedin.com/company/lions-clubs-international/"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
              >
                <span className="icon">
                  <i className="fab fa-linkedin" />
                </span>
              </a>
              <a
                className="button has-text-grey"
                href="https://www.flickr.com/photos/lionsclubsorg/"
                target="_blank"
                rel="noopener"
                title="Flickr"
              >
                <span className="icon">
                  <i className="fab fa-flickr" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </aside>
    </div>

    <footer className="main-footer footer">
      <nav className="columns is-centered">
        <div className="menu column is-narrow">
          <p className="menu-label">About</p>
          <ul className="menu-list">
            <li>
              <a>
                About{' '}
                <abbr title="Lions Club of Bangalore Jayanagar">LCBJ</abbr>
              </a>
            </li>
            <li>
              <a>Asha Deep Senior Citizen Home</a>
            </li>
            <li>
              <a>Office Bearers</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div className="menu column is-narrow">
          <p className="menu-label">Contribute</p>
          <ul className="menu-list">
            <li>
              <a>Service Stories</a>
            </li>
            <li>
              <a>Contributing</a>
            </li>
            <li>
              <a>
                <abbr title="Corporate Social Responsibility">CSR</abbr>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="is-size-7 has-text-centered">
        Website developed by
        <a
          href="https://github.com/dheerajvs/lions-club-blr-jnr"
          target="_blank"
          rel="noopener"
        >
          Dheeraj Vepakomma
        </a>
      </p>
    </footer>
  </>
);

export default Index;
