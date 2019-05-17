import * as React from 'react';
import { LocaleProvider } from 'antd';
import * as ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App';

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('App')
);
