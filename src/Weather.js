import React from 'react'
import SeasonDisplay from './SeasonDisplay'

class Weather extends React.Component {

  state = {lat : null, errorMessage : '', loading : true};

  componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
          postion => this.setState({ lat: postion.coords.latitude, loading: false }),
          err => this.setState({ errorMessage: err.message, loading: false })
        );
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render(){

    if(this.state.loading){
      return <div>Loading...</div>
    }else{
      if (this.state.errorMessage){
        return <div>{this.state.errorMessage}</div>
      } else if (this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }
    }
   
  }
}

export default  Weather;