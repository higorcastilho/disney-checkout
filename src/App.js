import React from 'react'
import SliderRouter from './router'

import { CustomerDataProvider } from './context/CustomerData'

import './assets/styles/globalStyles.css'

function App() {
  return (
    <div>
    	<CustomerDataProvider>
      	<SliderRouter />
      </CustomerDataProvider>
    </div>
  );
}

export default App;
