import axios from 'axios';
import * as React from 'react'
import Table from 'react-materialize/lib/Table'
import Notifications, { notify } from 'react-notify-toast';
import { RouteComponentProps } from 'react-router'
import Package from '../domain/Package';
import ServiceError from '../domain/ServiceError'

class ShowAllPackagesInformation extends React.Component<{} & RouteComponentProps<{
  status: string
}>, {
    packages: Package[]
  }> {

  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.state = {
      packages: []
    }
    const status = this.props.match.params.status
    setInterval(() => this.updateList(status), 1000)
  }

public updateList(status: string) {
  axios.get(`http://localhost:8080/packages/${status}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState(prev => {
          return { packages: res.data }
        })
      })
      .catch(reason => {
        if (reason.response) {
          const se = new ServiceError(reason.response.data.code, reason.response.data.message)
          notify.show(se.message)
          console.log(se)
        }
      })
}

  public tableRow = (p: Package) => (
    <tr key={p.id}>
      <td key={p.id}>{p.id}</td>
      <td key={p.owner.name}>{p.owner.name}</td>
      <td key={p.owner.address.firstField}>{`${p.owner.address.primarySegmentType} ${p.owner.address.firstField} - ${p.owner.address.secondarySegmentType} ${p.owner.address.secondField}`}</td>
      <td key={p.box.volume}>{p.box.volume}</td>
    </tr>
  )

  public render() {
    return (
      <div>
        <Notifications />
        <Table bordered={true} hoverable={true}>
          <thead>
            <tr>
              <th>Package Id</th>
              <th>Owner's name</th>
              <th>Address</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {this.state.packages.map(this.tableRow)}
          </tbody>
        </Table>
      </div>
    )
  }

}

export default ShowAllPackagesInformation
