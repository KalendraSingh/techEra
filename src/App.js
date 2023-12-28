import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/index'
import Header from './components/Header/index'
import CourseDetails from './components/CourseDetails/index'

const App = () => (
  <div>
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/:id" component={CourseDetails} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
