import RaisedButton from 'material-ui/RaisedButton'
import * as React from 'react'
import Col from 'react-materialize/lib/Col'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'
import Address from '../domain/Address'
import Box from '../domain/Box'
import User from '../domain/User'

class CreatePackage extends React.Component<{}, {
  owner: User;
  box: Box;
  status: string
}> {

  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleUserIdChange = this.handleUserIdChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this)
    this.state = {
      box: new Box(0, 0, 0, 0),
      owner: new User("", "", "", new Address("", "", "", ""), ""),
      status: ""
    }
  }

  public handleOnClick(e) {
    console.log(this.state.owner)
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

  public render() {
    return (
      <div>
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
            <Input s={3} type='select' label="Primary Segment" defaultValue='1'>
              <option value='1' />
              <option value='2'>Street</option>
              <option value='3'>Avenue</option>
            </Input>
            <Input type="text" label="First Field" s={3} />
            <Input s={3} type='select' label="Secondary Segment" defaultValue='1'>
              <option value='1' />
              <option value='2'>Street</option>
              <option value='3'>Avenue</option>
            </Input>
            <Input type="text" label="Second Field" s={3} />
          </Row>
        </div>
        <div className="section-form">
          <h5>Box</h5>
          <Row>
            <Input type="number" label="Lenght" s={3} />
            <Input type="number" label="Width" s={3} />
            <Input type="number" label="Height" s={3} />
            <Input type="number" label="Weight" s={3} />
          </Row>
        </div>
        <div className="section-form">
          <h5>Status</h5>
          <Row>
            <Input s={3} name='packageStatus' type='radio' value='transit' label='Transit' />
            <Input s={3} name='packageStatus' type='radio' value='review' label='Review' />
            <Input s={3} name='packageStatus' type='radio' value='received' label='Received' />
            <Input s={3} name='packageStatus' type='radio' value='delivered' label='Delivered' />
          </Row>
        </div>
        <Row>
          <Col s={3} offset="s9"><RaisedButton label="Create Package" fullWidth={true} onClick={this.handleOnClick} /></Col>
        </Row>
      </div>
    )
  }
}

export default CreatePackage