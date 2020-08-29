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
    <h2>Smurf List</h2>
    {this.props.smurfArray.map(smurf => (
     <div className='item' key={smurf.id}>
     <i className='large middle aligned github alternate icon' />
     <div className='content'>
       <div className='description'>
         <h3>Name: {smurf.name}</h3>
         <p>Age: {smurf.age}</p>
         <p>Height: {smurf.height}</p>
       </div>
     </div>

   </div>
    ))}
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