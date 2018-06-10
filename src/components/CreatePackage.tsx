import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton'
import * as React from 'react'
import Col from 'react-materialize/lib/Col'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Notifications, { notify } from 'react-notify-toast';
import Address from '../domain/Address'
import Box from '../domain/Box'
import ServiceError from '../domain/ServiceError'
import User from '../domain/User'

class CreatePackage extends React.Component<{}, {
  owner: User;
  box: Box;
  status: string;
  error: ServiceError
}> {

  constructor(props) {
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    // Owner events binding
    this.handleUserIdChange = this.handleUserIdChange.bind(this)
    // Box events binding
    this.handleLenght = this.handleLenght.bind(this)
    this.handleWidth = this.handleWidth.bind(this)
    this.handleHeight = this.handleHeight.bind(this)
    this.handleWeight = this.handleWeight.bind(this)
    // Status events binding
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.state = {
      box: new Box(0, 0, 0, 0),
      error: new ServiceError("", ""),
      owner: new User("", "", "", new Address("", "", "", ""), ""),
      status: ""
    }
  }

  public onSubmitHandler(e) {
    const p = { ownerId: this.state.owner.id, box: this.state.box, status: this.state.status }

    axios.post(`http://localhost:8080/package`, p)
      .then(res => {
        console.log(res);
        console.log(res.data);
        notify.show(`Packacke created succesfully with id: ${res.data.id}`)
      })
      .catch(reason => {
        if (reason.response) {
          const se = new ServiceError(reason.response.data.code, reason.response.data.message)
          this.setState(prev => {
            notify.show(se.message)
            return { error: se }
          })
          console.log(se)
        }
      })
  }

  // User status change handlers
  public handleUserIdChange(e) {
    this.setState({ owner: this.state.owner.setId(e.target.value) })
  }

  // Box change handlers
  public handleLenght(e) {
    this.setState({ box: this.state.box.setLength(e.target.value) })
  }

  public handleWidth(e) {
    this.setState({ box: this.state.box.setWidth(e.target.value) })
  }

  public handleHeight(e) {
    this.setState({ box: this.state.box.setHeight(e.target.value) })
  }

  public handleWeight(e) {
    this.setState({ box: this.state.box.setWeight(e.target.value) })
  }
  
  // Status handler
  public handleStatusChange(e) {
    this.setState({ status: e.target.value })
  }

  public render() {
    return (
      <div>
        <Notifications options={{ zIndex: 5000 }} />
        <div className="section-form">
          <h5>Owner</h5>
          <Row>
            <Input type="text" label="User Id" s={6} onChange={this.handleUserIdChange} />
          </Row>
        </div>
        <div className="section-form">
          <h5>Box</h5>
          <Row>
            <Input type="number" label="Lenght" s={3} onChange={this.handleLenght} />
            <Input type="number" label="Width" s={3} onChange={this.handleWidth} />
            <Input type="number" label="Height" s={3} onChange={this.handleHeight} />
            <Input type="number" label="Weight" s={3} onChange={this.handleWeight} />
          </Row>
        </div>
        <div className="section-form">
          <h5>Status</h5>
          <Row>
            <Input s={3} type='select' label="Status" defaultValue='none' onChange={this.handleStatusChange}>
              <option value='none' />
              <option value='received'>Received</option>
              <option value='review'>Review</option>
              <option value='transit'>In Transit</option>
              <option value='delivered'>Delivered</option>
            </Input>
          </Row>
        </div>
        <Row>
          <Col s={3} offset="s9"><RaisedButton label="Create Package" fullWidth={true} onClick={this.onSubmitHandler} /></Col>
        </Row>
      </div>
    )
  }
}

export default CreatePackage