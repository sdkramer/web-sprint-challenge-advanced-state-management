import React from "react";
import { connect } from 'react-redux';

class SmurfList extends React.Component {

render() {
  return (
    <div className='ui relaxed divided list'>
      SmurfList
    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log('SmurfList state; ', state);
}

export default connect(mapStateToProps, {})(SmurfList);