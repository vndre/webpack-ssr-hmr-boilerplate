import { createRouter } from '@curi/router';
import { browser } from '@hickory/browser';
import { h, hydrate } from 'preact';

import './browser.css';
import { Root } from './root';
import { routes } from './routes';

const router = createRouter(browser, routes);

router.once(() => {
  hydrate(<Root router={router} />, document.getElementById('root'));
});
