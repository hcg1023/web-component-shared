/* @refresh reload */
import { render } from 'solid-js/web';
import { customElement } from 'solid-element'

import './index.css';
import App from './App';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}


customElement('solid-app', App)
// render(() => <App />, root!);
root!.append(document.createElement('solid-app'))
