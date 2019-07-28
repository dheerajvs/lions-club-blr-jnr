import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import Link from 'components/Link';
import lciLogoUrl from '../img/lci-logo_url.svg';
import lciSigUrl from '../img/lci-sig.png';
import Facebook from 'react-svg-loader!super-tiny-icons/images/svg/facebook.svg';
import Twitter from 'react-svg-loader!super-tiny-icons/images/svg/twitter.svg';
import Instagram from 'react-svg-loader!super-tiny-icons/images/svg/instagram.svg';
import YouTube from 'react-svg-loader!super-tiny-icons/images/svg/youTube.svg';
import LinkedIn from 'react-svg-loader!super-tiny-icons/images/svg/linkedIn.svg';
import Flickr from 'react-svg-loader!super-tiny-icons/images/svg/flickr.svg';

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
          <div id="menuToggle">
            <input type="checkbox" />
            <div class="hamburger">
              <span />
              <span />
              <span />
            </div>
            <Link className="logo" href="/">
              <img src={lciLogoUrl} alt="Logo" width="60" />
            </Link>
            <div className="menu-backdrop" />
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
              <div className="menu-footer">
                <div className="buttons is-centered">
                  <Link className="button is-primary" href="#">
                    Join us
                  </Link>
                  <Link className="button is-info" href="#">
                    Donate
                  </Link>
                </div>
              </div>
            </div>
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
                    className="button"
                    href={href}
                    title={title}
                  >
                    <span className="icon">
                      {icons[title]({
                        viewBox: '0 0 512 512',
                        styles: {},
                      })}
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
              src={lciSigUrl}
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
