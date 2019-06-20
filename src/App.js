import React, { Component } from 'react'
import Searchbox from './Searchbox';

export class App extends Component {
constructor(props){
    super(props);
    this.state = {
      city: '',
      restaurants: [],
      isloading: false
    };

    this.Url = `http://opentable.herokuapp.com/api/restaurants?`;
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
}

onSubmit(city){
  this.fetchUrl = this.Url + `city=${city}`;
  this.fetchData(this.fetchUrl);
}

fetchData(fetchUrl){
  this.setState({isloading: true});
  fetch(fetchUrl)
      .then(data => data.json())
      .then((res) => {
        console.log(res);
          this.setState((prev, props) => ({
              restaurants: res.restaurants
          }));
      }) .then(() => {
      this.setState({isloading: false});
  });
}


render() {
    const { restaurants } = this.state
    const restaurantList = ( restaurants && restaurants.length) ? (
      restaurants.map(restaurant => {
        return (
          <div className="col-lg-12" key={restaurant.id}>
          <div className="card mb-3 shadow-sm p-3" >
              <h5 className="text-primary">{restaurant.name}</h5>
              <p>Address: {restaurant.address}, {restaurant.area}, {restaurant.postal_code} <br/>
              Price: {restaurant.price}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Restaurants found in city !!!. Please try others </div>
    );

    return (
      <React.Fragment>
        <Searchbox onSubmit={ this.onSubmit } />
        <div className="container">
          <h4 className="center">Restaurants Available</h4>
          {restaurantList}
        </div>
          <div className={`show-loader ${this.state.isLoading ? "" : "hide"}`}>
          </div>
      </React.Fragment>
    )
  }
}

export default App

