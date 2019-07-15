import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Link from 'components/Link';
import Facebook from '../img/Facebook.svg';
import Twitter from '../img/Twitter.svg';
import Instagram from '../img/Instagram.svg';
import YouTube from '../img/YouTube.svg';
import LinkedIn from '../img/LinkedIn.svg';
import Flickr from '../img/Flickr.svg';

const icons = {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Flickr,
};

const Page = props => {
  const { data, path, children } = props;
  const { links, navMenu, footerMenu, news, resources, connect } = data;

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
          <div className="mobile-nav is-flex is-hidden-tablet">
            <button
              className="hamburger button is-medium is-primary is-absolute"
              aria-label="menu"
              aria-expanded="false"
              data-show="quickview"
              data-target="quickviewDefault"
            >
              <span />
            </button>
            <Link href="/">
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
                <span />
              </button>
            </header>

            <div className="quickview-body">
              <div className="menu">
                <ul className="menu-list">
                  {navMenu.map(href => (
                    <li key={href}>
                      <Link
                        className={classnames({
                          'is-active': path === href,
                        })}
                        href={href}
                      >
                        {links[href]}
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
              <h2>Lions Clubs International</h2>
              <hr />
            </header>
            <div className="menu">
              <p className="menu-label">News</p>
              <ul className="menu-list">
                {news.map(href => (
                  <li key={href}>
                    <Link href={href}>{links[href]}</Link>
                  </li>
                ))}
              </ul>
              <p className="menu-label">Resources</p>
              <ul className="menu-list">
                {resources.map(href => (
                  <li key={href}>
                    <Link href={href}>{links[href]}</Link>
                  </li>
                ))}
              </ul>
              <p className="menu-label">Connect</p>
              <div className="social-btns buttons">
                {connect.map(([href, title]) => (
                  <Link
                    key={href}
                    className="button is-medium"
                    href={href}
                    title={title}
                  >
                    <span className="icon">
                      <img src={icons[title]} alt={title} />
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
          {footerMenu.map(({ title, items }) => (
            <div key={title} className="menu column is-narrow">
              <p className="menu-label has-text-info has-text-weight-bold">
                {title}
              </p>
              <ul className="menu-list">
                {items.map(href => (
                  <li key={href}>
                    <Link href={href}>{links[href]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lci-footer column">
            <img
              className="has-text-centered"
              src="/img/LCI_primary_sig_white.png"
              alt="Logo"
              width="200"
            />
            <p className="is-size-7">
              Lions Clubs International is the largest service club organization
              in the world. Our 1.42 million members in more than 47,000 clubs
              are serving in over 200 countries and geographic areas around the
              globe.
            </p>
          </div>
        </nav>
        <p className="is-size-7 has-text-centered">
          Website developed by{' '}
          <Link
            class="author"
            href="https://github.com/dheerajvs/lions-club-blr-jnr"
          >
            Dheeraj Vepakomma
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Page;
