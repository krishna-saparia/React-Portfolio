import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Krishna Saparia',
      headerLinks: [
        { title: 'Home' , path: '/'},
        { title: 'About' , path: '/about'},
        { title: 'Contact' , path: '/contact'}
      ],
      home: {
        title : 'Hey there',
        subTitle: 'Projects the make a difference',
        text: 'Checkout My Project Below..'
      },
      about:{
       title : 'About Me',
      },
      contact: {
        title : 'Let\'s talk',
      }
  }
  }
  
  
  render() {
    return (
      <div> Hello react </div>
    );
  }
}


export default App; 