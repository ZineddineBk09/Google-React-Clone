import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SearchPage from './Pages/SearchPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
