import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Link from 'components/Link';

const menu = [
  ['/', 'Home'],
  [
    '/about/',
    <>
      About <abbr title="Lions Club of Bangalore Jayanagar">LCBJ</abbr>
    </>,
  ],
  ['/stories/', 'Service Stories'],
  ['/asha-deep/', 'Asha Deep Senior Citizen Home'],
  ['/contributing/', 'Contributing'],
  [
    '/csr/',
    <>
      <abbr title="Corporate Social Responsibility">CSR</abbr>
    </>,
  ],
  ['/office-bearers/', 'Office Bearers'],
  ['/contact/', 'Contact us'],
];

const lciNews = [
  [
    'https://www.lionsclubs.org/en/resources-for-members/resource-center/global-action-team',
    'Your Global Action Team',
  ],
  ['https://lcicon.lionsclubs.org/', 'Attend LCICon in Milan'],
  ['https://www.lionsclubs.org/en/donate', 'Donate to Campaign 100'],
  ['https://www.lionsclubs.org/en/footer/lion-magazine', 'Read LION Magazine'],
  [
    'https://www.lionsclubs.org/en/explore-our-clubs/our-global-causes',
    'Explore Our Global Causes',
  ],
  [
    'https://www.lionsclubs.org/en/discover-our-clubs/our-leaders',
    'Meet Our Leaders',
  ],
];

const resources = [
  ['https://www.lionsclubs.org/', 'Lions Clubs International'],
  ['https://www.lionsclubs.org/en/discover-our-foundation/mission', 'LCIF'],
  [
    'https://www.lionsclubs.org/en/resources-for-members/resource-center',
    'Resource Center',
  ],
  ['https://youtube.com/lionsclubs', 'Lions Videos'],
];

const connect = [
  ['https://www.facebook.com/lionsclubs', 'Facebook', 'fa-facebook-f'],
  ['https://twitter.com/lionsclubs', 'Twitter', 'fa-twitter'],
  ['https://instagram.com/lionsclubs', 'Instagram', 'fa-instagram'],
  ['https://www.youtube.com/user/lionsclubsorg', 'YouTube', 'fa-youtube'],
  [
    'https://www.linkedin.com/company/lions-clubs-international/',
    'LinkedIn',
    'fa-linkedin',
  ],
  ['https://www.flickr.com/photos/lionsclubsorg/', 'Flickr', 'fa-flickr'],
];

const Page = props => {
  const { path, children } = props;

  return (
    <>
      <Helmet
        defaultTitle="Lions Club of Bangalore Jayanagar"
        titleTemplate="%s | Lions Club of Bangalore Jayanagar"
      />

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
            <Link className="column is-narrow" href="/">
              <img src="/img/lci-logo.svg" alt="Logo" width="60" />
            </Link>
          </div>

          <div
            id="quickviewDefault"
            className="quickview is-left is-marginless"
          >
            <header className="quickview-header columns is-centered is-mobile is-marginless">
              <Link className="column is-narrow" href="/">
                <img src="/img/lci-logo.svg" alt="Logo" width="60" />
              </Link>
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
                  {menu.map(([href, title]) => (
                    <li key={href}>
                      <Link
                        className={classnames({
                          'is-active': path === href,
                        })}
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="quickview-footer">
              <div className="buttons is-centered">
                <Link className="button is-primary" href="#">
                  Join us
                </Link>
                <Link className="button is-info" href="#">
                  Donate
                </Link>
              </div>
            </footer>
          </div>
        </nav>

        <main className="column is-half is-three-fifths-desktop tablet-width">
          {children}
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
                {lciNews.map(([href, title]) => (
                  <li key={href}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
              <p className="menu-label">Resources</p>
              <ul className="menu-list">
                {resources.map(([href, title]) => (
                  <li key={href}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
              <p className="menu-label">Connect</p>
              <div className="social-btns buttons">
                {connect.map(([href, title, icon]) => (
                  <Link
                    key={href}
                    className="button has-text-grey"
                    href={href}
                    title={title}
                  >
                    <span className="icon">
                      <i className={classnames('fab', icon)} />
                    </span>
                  </Link>
                ))}
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
          Website developed by{' '}
          <Link href="https://github.com/dheerajvs/lions-club-blr-jnr">
            Dheeraj Vepakomma
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Page;
