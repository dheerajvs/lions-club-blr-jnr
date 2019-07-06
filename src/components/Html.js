import React from 'react';

const Html = props => (
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#112e57" />
      <title>Lions Club of Bangalore Jayanagar</title>
      <link rel="icon" type="image/png" sizes="512x512" href="favicon.png" />
      <link rel="apple-touch-icon" href="favicon.png" />
      <link rel="manifest" href="manifest.json" />
      <link rel="stylesheet" href="css/index.css" />
      <script defer src="js/index.js" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </head>

    <body>{props.children}</body>
  </html>
);

export default Html;
