import React from 'react';
import { provider } from 'react-ioc';

import App from './App';
import { AccountService } from './module/account/account.service';

export const BrowserModule = provider(AccountService)(() => <App />);
