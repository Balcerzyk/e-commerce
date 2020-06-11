import React from 'react';

 const Image = (props) =>{
   
  const returnImg = () => {
    
    switch(props.src) {
      case 'ball.jpg': return <img style={props.style} src={require('../images/ball.jpg')}/>
      case 'rocket.jpg': return <img style={props.style}src={require('../images/rocket.jpg')}/>
      case 'boots.jpg': return <img style={props.style} src={require('../images/boots.jpg')}/>
      case 'tshirt.jpg': return <img style={props.style} src={require('../images/tshirt.jpg')}/>
    }
    
  }

  return(
    returnImg()
  )
}

export default Image;