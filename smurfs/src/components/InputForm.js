import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InputForm = () => {

  const initialFormValues = {
    name: '',
    age: null,
    height: ''
  }
  
  const [ formValues, setFormValues ] = useState(initialFormValues);
  
  const onInputChange = (event) => {
    // console.log(event);
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({...formValues, [name]: value})
    
  }
  
  
    const onSubmit = (event) => {
      // event.preventDefault();
      console.log("submitted");
  
      axios
        .post("http://localhost:3333/smurfs", formValues)
        .then(response => {
          console.log('post response data:', response.data)
  // setPost(response.data);
        }
        
  )
        .catch(err => console.log(err))
    };

return (
  <div className="ui container">
  <h3>Add a Smurf!</h3>
  <form className="ui form" onSubmit={onSubmit}>
<div className="field">
<label>Name</label>
<input type="text" name="name" placeholder="Name" onChange={onInputChange}/>
</div>
<div className="field">
<label>Age</label>
<input type="text" name="age" placeholder="Age" onChange={onInputChange}/>
</div>
<div className="field">
<label>Height</label>
<input type="text" name="height" placeholder="Height" onChange={onInputChange}/>
</div>
<button className="ui button" type="submit">Submit</button>
</form>
</div>
)

}

export default InputForm;