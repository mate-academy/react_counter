import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { CounterClass } from './components/CounterClass/CounterClass';
import { CounterFunction } from './components/CounterFunction/CounterFunction';

export const App = () => (
  <div className="app">
    <CounterClass />
    <CounterFunction />
  </div>
);
