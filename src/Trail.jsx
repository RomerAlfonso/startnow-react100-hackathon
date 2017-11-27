import React, { Component } from 'react'


class Trail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            return ( <div className='well card mb-4 text-center'>
            <h4>{this.props.name}</h4>
            <p>{this.props.hike.activity.description}</p>
            <a  target ="_blank" href={"https://maps.google.com/?q="+this.props.location[0] + "," + this.props.location[1]}>
            <button type="button" className="btn btn-primary mb-3 " >Direction</button>
            </a>
        </div>
                );
        }
    
}
export default Trail;
