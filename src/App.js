import logo from './logo.svg';
import './style/App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Quiz from './components/quiz/quiz';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_bg">
          <div className="App_content">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/quiz" component={Quiz} />
              <Route exact path="*" render ={() => <Redirect to ="/home"/>} />
            </Switch>
          </div>
        </div>
        <div className="App_bg_left">
          <div className="bg_wave"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
