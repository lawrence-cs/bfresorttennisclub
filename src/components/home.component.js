import React, { Component } from 'react';
import data from "./data";
import featured_image from '../img/featured-image.jpeg';


export default class Home extends Component {
  render() {
    return (
      <div>
      	<div className="text-center">
      		<img src={featured_image} className="featured_image" />
      	</div>
      </div>
    )
  }
}