import React from 'react';

const externalLink = /^https?:\/\//i;

const Link = props => {
  const { href, children, ...rest } = props;
  const aProps = { href, ...rest };

  if (href && externalLink.test(href)) {
    aProps.rel = 'noopener';
    aProps.target = '_blank';
  }

  return <a {...aProps}>{children}</a>;
};

export default Link;
