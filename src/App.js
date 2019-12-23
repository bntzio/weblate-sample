import React, { useState } from 'react';
import * as locale_es from 'react-intl/locale-data/es';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';

import logo from './logo.svg';
import esMessages from './translations/es.json'
import enMessages from './translations/en.json'

import './App.css';

addLocaleData([...locale_es]);

const messages = {
  'en': enMessages,
  'es': esMessages,
};

function App() {
  const [locale, setLocale] = useState('en');

  const changeLang = () => {
    switch (locale) {
      case 'es':
        return setLocale('en')
      default:
        return setLocale('es')
    }
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={() => changeLang()}>Change to {locale === 'es' ? 'english' : 'spanish'}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="link" />
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
