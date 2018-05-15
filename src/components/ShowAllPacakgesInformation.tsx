import * as React from 'react'
import Package from '../domain/Package';
import Table from 'react-materialize/lib/Table'

class ShowAllPackagesInformation extends React.Component<{}, {
  packages: Package[]
}>{

  constructor(props) {
    super(props)

  }

  public render() {
    return (
      <Table bordered={true} hoverable={true}>
        <thead>
          <tr>
            <th>Package Id</th>
            <th>Owner's name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.packages.map((p) => {
            <tr>
              <td>{p.owner.id}</td>
            </tr>
          })}
        </tbody>
      </Table>
    )
  }

}