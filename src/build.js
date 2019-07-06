import { renderToStaticMarkup } from 'react-dom/server';
import Index from './pages/Index';

const routes = {
  '/': Index,
};

export default locals =>
  '<!doctype html>' + renderToStaticMarkup(routes[locals.path](locals));
