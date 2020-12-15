import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

//import About from './pages/About'
import CheckoutEmail from './pages/CheckoutEmail'
import CheckoutAgreement from './pages/CheckoutAgreement'

import Header from './components/Header'
import Footer from './components/Footer'

import './styles.css'

const routes = [
  { path: '/checkout-email', name: 'CheckoutEmail', Component: CheckoutEmail },
  { path: '/checkout-agreement', name: 'CheckoutAgreement', Component: CheckoutAgreement },
]

function Routes() {
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
          <Footer />
        </div>
      </>
    </Router>
  )
}


export default Routes