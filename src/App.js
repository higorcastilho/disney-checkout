import React from 'react'
import Routes from './routes'

import { CustomerDataProvider } from './context/CustomerData'

import './assets/styles/globalStyles.css'

function App() {
  return (
    <div>
    	<CustomerDataProvider>
      	<Routes />
      </CustomerDataProvider>
    </div>
  );
}

export default App;
