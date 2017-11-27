import React, { Component } from 'react';
import GoMaps from './gomaps';
import Trail from './trail'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      selected: '',
      selectedHike: null,
      hikes: null
    }
this.handleClick=this.handleClick.bind(this)
this.selectOnChange=this.selectOnChange.bind(this)
  }
  componentWillMount() {
   var url = "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=San+Diego&q[country_cont]=United+States&q[state_cont]=California";  
   axios.get(url, {
     headers: {
       "X-Mashape-Key": "wA6iEHEzvXmshcYXboHHFKdDJOmxp1L0WBqjsnFi7JOTFPbF5t"
   
     }
   })
   .then((response) => {
     var allData = [];

     response.data.places.forEach((place) =>{
        const dataWeNeed = {
          id: place.unique_id,
          name: place.name,
          directions: place.directions,
          lat: place.lat,
          lon: place.lon,
          city: place.city,
          state: place.state,
          
          activity: {
            id: place.activities[0].unique_id,
            name:place.activities[0].name,
            description:place.activities[0].description,
            url:place.activities[0].url,
            rating:place.activities[0].rating
          }
        }

        allData.push(dataWeNeed);
    });

     this.setState({
       hikes: allData
     });
   });
   
  }

  handleClick(e){
    const hike = this.state.hikes.find((hike) => hike.id === parseInt(this.state.selected));
    this.setState({selectedHike: hike});
   
  }
   

  selectOnChange(e) {
    this.setState({selected: e.currentTarget.value});
  }

  render() {

    return (
      <div className='container mt-5'>
        <h1 className="text-white font-weight-bold text-center">San Diego Hike Finder</h1>
        <p className="text-white font-weight-light text-center"> Best hiking trails in San Diego</p>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="card bg-dark" className="card text-left ">
              <h6 className="card-header pl-3 pt-3">Search for Hiking Trails</h6>
              <div className="card-block">
                <h6 className="font-weight-bold">Activity</h6>
                <select onChange={this.handleChange} className="form-control create-todo-text" id="exampleFormControlTextarea1" rows="3">
                      <option value = {''}>Select Activity</option>
                      <option value ={''} >Hiking</option>
                </select>

                <h6 className="font-weight-bold"> Locations</h6>
                <select className="form-control mb-5 create-todo-priority" onChange={this.selectOnChange}>
                  <option value={''}>Select Location</option>
                  {
                    this.state.hikes &&
                    this.state.hikes.map((hike) => {
                      return <option value={hike.id}>{ hike.name }</option>
                    })
                  }

                </select>

                <button className="btn btn-success btn-block create-todo" value='submit' onClick={this.handleClick}>
                  Search
                </button>
              </div>
            </div>
          </div>


          <div className="col-8">
            <div className="card  mb-5" style={{ overflow: 'hidden' }} >

              <h6 className="card-header text-center"  >
                MAPS
              </h6>
              <div>
                <div className="border rounded" style={{ height: '300px', width: '728px' }}  >
                  <GoMaps 
                    lat={this.state.selectedHike && this.state.selectedHike.lat}
                    lng={this.state.selectedHike && this.state.selectedHike.lon} 
                    hike={this.state.selectedHike && this.state.selectedHike}/>
                </div>
              </div>

            
            </div>
          </div>

          
          
          <div className="col-12">
          

               <pre>
                    { this.state.selectedHike &&
                        <Trail
                          key={this.state.selectedHike.id}
                          name={this.state.selectedHike.name}
                          hike={this.state.selectedHike}
                          description={this.state.selectedHike.activity.description}
                          location={[this.state.selectedHike.lat, this.state.selectedHike.lon]} />
                    }
                  </pre>
                
          
              </div>

        </div>
      </div>
    );
  }
}


export default App;
