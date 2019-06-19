import React, { Component } from 'react'

export class Searchbox extends Component {
constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e){
    this.setState({ value: e.target.value });
}

onSubmit(){
    this.props.onSubmit(this.state.value);
}

    
render() {
    return (
      <React.Fragment>
        <div className="container text-center" >
            <h4 className="m-3 text-secondary">Enter city name to view the restuarants</h4>
            <div className="form-inline mb-4">
                <input type='text' className="form-control col-lg-11 col-md-10 col-sm-10 col-xs-8" placeholder='Please enter your city' 
                onChange={ this.onChange } aria-label="Please enter your city"/>
                <input type='submit' className="btn btn-outline-primary my-2 my-sm-0" onClick={ this.onSubmit }/>
            </div>
                    
        </div>
      </React.Fragment>
    )
  }
}

export default Searchbox
