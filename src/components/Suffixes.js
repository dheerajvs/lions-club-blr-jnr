import React from 'react';

const Suffix = props => {
  const { children, ...rest } = props;

  return (
    <abbr className="is-size-7" {...rest}>
      {children}
    </abbr>
  );
};

const Mjf = props => (
  <Suffix title="Melvin Jones Fellow" {...props}>
    (MJF)
  </Suffix>
);

const Pmjf = props => (
  <Suffix title="Progressive Melvin Jones Fellow" {...props}>
    (PMJF)
  </Suffix>
);

export { Mjf, Pmjf };
