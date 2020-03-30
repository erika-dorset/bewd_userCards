import React from 'react';
import ReactDOM from 'react-dom';
// import json file
import data from "./data";
// import stylesheet
import 'bulma/css/bulma.css'

// Store user results as [{user},{user}, ...]
const users = data.results;

// Component to represent a single User card
function User(props) {
    return (
        <div className="column is-3">
            <div className="card" >
                <div className="card-image">
                    <figure className="image is-4by3">
                        {/*Get the results image*/}
                        <img alt='Profile' src={props.image}></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            {/*Get the results data for title and name, change the name to be all Upper case*/}
                            <p className="title is-4 has-text-primary"><span className="has-text-grey-light">{props.title}</span> {props.name.toUpperCase()}</p>
                            {/*Capitalize the first letter only*/}
                            <p className="subtitle">{props.last.charAt(0).toUpperCase() + props.last.substring(1)}</p>
                            <hr/>
                            {/*Use the cite element to specify this is a quote*/}
                            <cite className="subtitle">"{props.quote}"</cite>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// map through the users data and iterate through all elements (u), the data is passed into the components through props
const userList = users.map(u => (
    <User
        key={u.name.first}
        title={u.name.title}
        name={u.name.first}
        last={u.name.last}
        image={u.picture.large}
        quote={u.quote}
    />
));

// draw the User components in a grid layout using Bulma
ReactDOM.render(
    <div className="container is-widescreen">
        <h1 className="title is-1 has-text-primary">List of Users</h1>
        <hr/>
        <div className="columns is-multiline ">
            {/*Get the user list*/}
            {userList}
        </div>
    </div>
, document.getElementById("root"));
