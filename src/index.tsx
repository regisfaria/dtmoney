import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model }  from 'miragejs';

import { App } from './App';

const transactionSeed = [
  {
    id: 1,
    title: 'Website Development',
    value: 12000,
    type: 'deposit',
    category: 'Work',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Mechanical Keyboard',
    value: 650,
    type: 'withdraw',
    category: 'Shopping',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'Steam - Monster Sanctuary',
    value: 40.89,
    type: 'withdraw',
    category: 'Games',
    createdAt: new Date(),
  },
]

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: transactionSeed
    });
  },
  
  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      const newData = {createdAt: new Date(), ...data };

      return schema.create('transaction', newData);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);