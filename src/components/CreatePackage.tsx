import RaisedButton from 'material-ui/RaisedButton'
import * as React from 'react'
import Col from 'react-materialize/lib/Col'
import Input from 'react-materialize/lib/Input'
import Row from 'react-materialize/lib/Row'

class CreatePackage extends React.Component {
  public render() {
    return (
      <div>
        <div className="section-form">
          <h5>Owner</h5>
          <Row>
            <Input type="text" label="User Id" s={3} />
            <Input type="text" label="Name" s={3} />
            <Input type="text" label="Last Name" s={3} />
            <Input type="text" label="Telephone" s={3} />
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
            <Input type="number" label="Width"  s={3} />
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
          <Col s={3} offset="s9"><RaisedButton label="Create Package" fullWidth={true} /></Col>
        </Row>
      </div>
    )
  }
}

export default CreatePackage