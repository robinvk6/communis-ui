import React from 'react';
import { Button, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class MissionRegionGrid extends React.Component {
  onRegionSelect = region => {
    let path = '/mission-region';
    this.props.history.push({
      pathname: path,
      search: '?query=' + region.id,
      state: { region: region },
    });
  };

  render() {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">Tier</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {this.props.regions.map(region => (
            <tr key={region.id}>
              <th scope="row">{region.name}</th>
              <td>{region.address.state}</td>
              <td>{region.address.country}</td>
              <td>{region.tier}</td>
              <td>
                <Button
                  color="link"
                  size="sm"
                  onClick={() => this.onRegionSelect(region)}
                >
                  view
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default withRouter(MissionRegionGrid);
