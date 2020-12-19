import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import routes, { Header } from './routes'

import './styles.css'

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