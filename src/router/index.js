import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { CSSTransition } from 'react-transition-group'

import routes, { Header } from './routes'

import './styles.css'

const history = createBrowserHistory()
history.listen(location => {
  setTimeout(() => {
    console.log(location.action)
    if (location.action === 'POP') {
      return
    }
    window.scrollTo(0, 0)
  })
})

function SliderRouter() {
  return (
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
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