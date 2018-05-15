import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton'
import * as React from 'react'
import Col from 'react-materialize/lib/Col'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Notifications, { notify } from 'react-notify-toast';
import Address from '../domain/Address'
import Box from '../domain/Box'
import Package from '../domain/Package'
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
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this)
    // Owner's Address events binding
    this.handlePrimarySegment = this.handlePrimarySegment.bind(this)
    this.handleFirstField = this.handleFirstField.bind(this)
    this.handleSecondarySegment = this.handleSecondarySegment.bind(this)
    this.handleSecondField = this.handleSecondField.bind(this)
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
    const p = new Package(this.state.owner, this.state.box, this.state.status)

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

  public handleNameChange(e) {
    this.setState({ owner: this.state.owner.setName(e.target.value) })
  }

  public handleLastNameChange(e) {
    this.setState({ owner: this.state.owner.setLastName(e.target.value) })
  }

  public handleTelephoneChange(e) {
    this.setState({ owner: this.state.owner.setTelephone(e.target.value) })
  }

  // Address status change handlers

  public handlePrimarySegment(e) {
    this.setState({ owner: this.state.owner.setAddress(this.state.owner.address.setPrimarySegmentType(e.target.value)) })
  }

  public handleFirstField(e) {
    this.setState({ owner: this.state.owner.setAddress(this.state.owner.address.setFirstField(e.target.value)) })
  }

  public handleSecondarySegment(e) {
    this.setState({ owner: this.state.owner.setAddress(this.state.owner.address.setSecondarySegmentType(e.target.value)) })
  }

  public handleSecondField(e) {
    this.setState({ owner: this.state.owner.setAddress(this.state.owner.address.setSecondField(e.target.value)) })
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

  // TODO: Fix the bug
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
            <Input type="text" label="User Id" s={3} onChange={this.handleUserIdChange} />
            <Input type="text" label="Name" s={3} onChange={this.handleNameChange} />
            <Input type="text" label="Last Name" s={3} onChange={this.handleLastNameChange} />
            <Input type="text" label="Telephone" s={3} onChange={this.handleTelephoneChange} />
          </Row>
        </div>
        <div className="section-form">
          <h5>Owner's Address</h5>
          <Row>
            <Input s={3} type='select' label="Primary Segment" defaultValue='none' onChange={this.handlePrimarySegment}>
              <option value='none' />
              <option value='street'>Street</option>
              <option value='avenue'>Avenue</option>
            </Input>
            <Input type="text" label="First Field" s={3} onChange={this.handleFirstField} />
            <Input s={3} type='select' label="Secondary Segment" defaultValue='none' onChange={this.handleSecondarySegment}>
              <option value='none' />
              <option value='street'>Street</option>
              <option value='avenue'>Avenue</option>
            </Input>
            <Input type="text" label="Second Field" s={3} onChange={this.handleSecondField} />
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
          <div onChange={this.handleStatusChange} id='radio-group-status'>
            <Row>
              <Input s={3} name='packageStatus' type='radio' value='transit' label='Transit' checked={this.state.status === 'transit'} />
              <Input s={3} name='packageStatus' type='radio' value='review' label='Review' checked={this.state.status === 'review'} />
              <Input s={3} name='packageStatus' type='radio' value='received' label='Received' checked={this.state.status === 'received'} />
              <Input s={3} name='packageStatus' type='radio' value='delivered' label='Delivered' checked={this.state.status === 'delivered'} />
            </Row>
          </div>
        </div>
        <Row>
          <Col s={3} offset="s9"><RaisedButton label="Create Package" fullWidth={true} onClick={this.onSubmitHandler} /></Col>
        </Row>
      </div>
    )
  }
}

export default CreatePackage