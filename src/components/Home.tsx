import * as React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {

  public render() {
    return (
      <div>
        This is the front-end, which was developed to demostrate how to develop an HTTP API Rest in Scala lang for hackdo conference
        by Juan Pablo Correa Rendon <span><i><b>@jupco</b></i></span>
        <br />
        Useful links:
          <ul>
          <li><Link to="/">Home (this page)</Link></li>
          <li><Link to="/createPackage">Create a Package</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home