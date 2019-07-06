import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Index from './pages/Index';

export default locals =>
  renderToStaticMarkup(
    <div>
      <Index />
    </div>
  );
