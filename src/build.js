import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import Html from 'components/Html';
import Index from 'pages/Index';
import About from 'pages/About';
import Stories from 'pages/Stories';
import AshaDeep from 'pages/AshaDeep';
import NotFound from 'pages/404';
import * as data from './data';

const routes = {
  '/': Index,
  '/about/': About,
  '/stories/': Stories,
  '/asha-deep/': AshaDeep,
  '/404.html': NotFound,
};

export default locals => {
  locals.data = data;
  const body = renderToStaticMarkup(routes[locals.path](locals));
  const helmet = Helmet.renderStatic();
  const html =
    '<!doctype html>' +
    renderToStaticMarkup(<Html helmet={helmet} body={body} />);
  Helmet.renderStatic(); // just to avoid memory leaks
  return html;
};
