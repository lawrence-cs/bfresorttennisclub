import React, { Component } from 'react';
import membership_image from '../img/membership.jpg';


export default class Membership extends Component {
  render() {
    return (
    	<div className="container">
	      	<div className="text-center">
	      		<h2 className="text-success">Membership</h2>
	      	</div>
      		<div className="divider-30"></div>
	      	<div className="row">
		      	<div className="col-lg-6">
	      			<img src={membership_image} className="image" alt="Members"/>
		      	</div>
		      	<div className="col-lg-6">
			      	<p>
			      		BF Resort Tennis Club offers a variety of memberships including:
			      	</p>
			      	<ul>
			      		<li>Adult: ₱1200</li>
			      		<li>Junior (under 18): ₱1200</li>
			      		<li>Senior: ₱1000</li>
			      	</ul>
			      	<p>
			      		All memberships are paid pro-rata from January each year.
			      	</p>
			      	<p>
						For all membership enquiries<br />
						contact: Dr. Ed Fernandez <br />
						mobile: +63 912 3456 789<br />
						email: drfernandez@tennis.com<br />
						facebook:  m.me/bfresorttennisclub<br />
					</p>
		      	</div>
		    </div>
    	</div>
    )
  }
}

