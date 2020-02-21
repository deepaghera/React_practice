import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className="jumbotron">
            <h1>PluraSHite Administration</h1>  
            <p>React,Flux, ANd React Router for ultra-responsive</p>        
            <Link to="/about" className="btn btn-primary"> About </Link>                                                                                                                   
        </div>
    );
}

export default HomePage;