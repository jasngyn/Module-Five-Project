// JavaScript Document

let main = document.querySelector('main');

/* Object Constructor*/
function rentProperty(name, price, rating, location, rooms, availability, features) {
	this.name = name;
	this.price = price;
	this.rating = rating;
	this.location = location;
	this.rooms = rooms;
	this.availability = availability;
	this.features = features;
	this.rentBooking = function() {
		return this.name + " is placed in the beautiful town of " + this.location + ", a quiet lakeside cottage best for family vacations" + "." + " This is great considering that it's only " + this.price + " with a rating of " + this.rating + ", and features that include: " + this.features[0] + " and " + this.features[1] + " and " + this.features[2] + "." + " At the current moment, this cottage is " + this.availability + ".";
	}
	this.greeting = function() {
    alert('Check this out! ' + this.name);
  }
};


let firstCottage = new rentProperty('Lakeview Cottage', '500.00', '5', 'Muskoka, ON', '2', 'Available', ['King Bed', 'Lake with canoe', 'Jacuzzi']);

let secondCottage = new rentProperty('Forest Hill Cottage', '300.00', '4.3', 'Muskoka, ON', '3', 'Available' ['Queen Bed', 'Balcony', 'Game Room']);


rentProperty.prototype.toString = function() {
  return this.name + " is placed in the beautiful town of " + this.location + ", a quiet lakeside cottage best for family vacations" + "." + " This is great considering that it's only " + this.price + " with a rating of " + this.rating + ", and features that include: " + this.features[0] + " and " + this.features[1] + " and " + this.features[2] + "." + " At the current moment, this cottage is " + this.availability + ".";
};

rentProperty.prototype.rentBooking = function() {
  return this.name + " is placed in the beautiful town of " + this.location + ", a quiet lakeside cottage best for family vacations" + "." + " This is great considering that it's only " + this.price + " with a rating of " + this.rating + ", and features that include: " + this.features[0] + " and " + this.features[1] + " and " + this.features[2] + "." + " At the current moment, this cottage is " + this.availability + ".";
};

function propertyDesc() {
	document.getElementById("desc").innerHTML = "Lakeview Cottage is placed in the beautiful town of Muskoka, ON, a quiet lakeside cottage best for family vacations. This is great considering that it's only 500.00 with a rating of 5, and features that include: King bed, Lake with canoe and Jacuzzi. At the current moment, this cottage is available.";
	alert("Lakeview Cottage is available!");
}

function propertyDesc2() {
	document.getElementById("desc2").innerHTML = "Forest Hill Cottage, a small north east town located in Muskoka, ON. With a cheap price of only 300.00 with a rating of 4.3 it includes features such as: Queen bed, Balcony and Game room. At the current moment, this cottage is available.";
	alert("Forest Hill Cottage is available!");
}

/* this calculates the 20% discount */
function calculateAmount(val) {
                let tot_price = val * .20;
                let divobj = document.getElementById('tot_cost');
                divobj.value = tot_price;
            }

function calculateAmt(val) {
                let tot_price = val * .20;
                let divobj = document.getElementById('tot_amt');
                divobj.value = tot_price;
            }

/* this function pops an alert box to indicate the cottage that is a SUPERHOST */
function propertyDesc() {
  let txt;
  if (confirm("THIS IS A SUPERHOST!")) {
    txt = "Lakeview Cottage is placed in the beautiful town of Muskoka, ON, a quiet lakeside cottage best for family vacations. This is great considering that it's only 500.00 with a rating of 5, and features that include: King bed, Lake with canoe and Jacuzzi. At the current moment, this cottage is available.";
  } else {
    txt = "Lakeview Cottage is placed in the beautiful town of Muskoka, ON, a quiet lakeside cottage best for family vacations. This is great considering that it's only 500.00 with a rating of 5, and features that include: King bed, Lake with canoe and Jacuzzi. At the current moment, this cottage is available.";
  }
  document.getElementById("desc").innerHTML = txt;
}


/* ADDED BROWSER AND THIRD PARTY API BELOW */


/* Cottage location marker on map */

function initMap() {
	
	let muskoka = {        // coordinates
		lat: 45.0531255,
		lng: -79.3941972
};

let div = document.querySelector('div');

let map = new google.maps.Map(document.getElementById('map'), {
	zoom: 12,
	center: muskoka
});
	
let marker = new google.maps.Marker({position:muskoka, map:map});

}

/* Geolocation */

let para = document.getElementById('p1');
let button = document.querySelector('button');

// Button clicked advises user of their location coordinates

function getLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else {
		para.innerHTML = '<p> Geolocation is not supported.';
	}
}

// sentence populates when button is clicked

function showPosition(position) {
	para.innerHTML = '<p> Your latitude is ' + position.coords.latitude + ' and longitude is ' + position.coords.longitude + ' :)' + '</p>';
}
button.onclick = getLocation;







