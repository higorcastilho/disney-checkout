import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import CheckoutEmail from '../pages/CheckoutEmail'
import CheckoutAgreement from '../pages/CheckoutAgreement'
import CheckoutPassword from '../pages/CheckoutPassword'
import CheckoutPayment from '../pages/CheckoutPayment'

import Header from '../components/Header'

import './styles.css'

const routes = [
  { path: '/', name: 'CheckoutEmail', Component: CheckoutEmail },
  { path: '/checkout-agreement', name: 'CheckoutAgreement', Component: CheckoutAgreement },
  { path: '/checkout-password', name: 'CheckoutPassword', Component: CheckoutPassword },
  { path: '/checkout-payment', name: 'CheckoutPayment', Component: CheckoutPayment }
]

function SliderRouter() {
  return (
    <Router>
      <>
        <div className="container">
          <Header />
          {routes.map(({ path, Component }) => (

            <Route key={path} exact path={path}>
              
              {({ match }) => (
                
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page"> <Component /></div>
                
                </CSSTransition>
              )}

            </Route>
          ))}
        </div>
      </>
    </Router>
  )
}


export default SliderRouter