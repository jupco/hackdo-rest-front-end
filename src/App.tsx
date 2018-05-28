import * as React from 'react';
import './App.css';

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePackage from './components/CreatePackage'
import Home from './components/Home';
import ShowAllPackagesInformation from './components/ShowAllPacakgesInformation'
import BaseTheme from './Theme';

class App extends React.Component {

  public render() {

    return (
      <MuiThemeProvider muiTheme={BaseTheme}>
        <div>
          <AppBar title="Inventory System" />
          <div className="App">
            <Router>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/package" component={CreatePackage} />
                <Route path="/packages/:status" component={ShowAllPackagesInformation} />
              </Switch>
            </Router>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
