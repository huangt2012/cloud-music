import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont'
import routes from './routes'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

export default App
