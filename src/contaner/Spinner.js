//this is the class based code
/*import React, { Component } from 'react'
import loding from "./loding.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={loding} alt='loding '/>
      </div>
    )
  }
}

export default Spinner
*/




//this is the code for function based 
import React, { Component } from 'react'
import loding from "./loding.gif"
const Spinner =()=> {
 
    return (
      <div className='text-center'>
       <img src={loding} alt='loding '/>
      </div>
    )
  }


export default Spinner
