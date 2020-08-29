import React from "react";
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

class SmurfList extends React.Component {

  componentDidMount () {
    console.log("CDM props: ", this.props);
    this.props.getSmurf();
  }

render() {
  console.log('render props: ', this.props);
  return (
    <div className='ui relaxed divided list'>
    <h2>smurflist</h2>
    {this.props.smurfArray.map(smurf => (<h4>{smurf.name}</h4>))}
    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log('SmurfList state; ', state);
  return {
    smurfArray: state
  }
}

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);