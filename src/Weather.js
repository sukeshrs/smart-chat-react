import React from 'react'

class Weather extends React.Component {

  constructor(props){
    super(props)
    this.state = {lat : null, errorMessage : '', loading : true};
    window.navigator.geolocation.getCurrentPosition(
      postion => {
        console.log(postion);
        this.setState({ lat: postion.coords.latitude, loading:false});
      },
      err =>{
        console.log(err);
        this.setState({errorMessage: err.message, loading: false });
      }
    )
  }

  render(){

    if(this.state.loading){
      return <div>Loading...</div>
    }else{
      if (this.state.errorMessage){
        return <div>{this.state.errorMessage}</div>
      } else if (this.state.lat){
        return <div>{this.state.lat}</div>
      }
    }
   
  }
}

export default  Weather;