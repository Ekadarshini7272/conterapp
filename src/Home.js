import React from 'react';
import {Link} from 'react-router-dom';
import '../src/styles/component.css'
const Home = () => {
return (
<div className='home-page'>
<h1>Welcome to Couter App</h1>
<Link to="/counter"><h2>Counter App</h2></Link>
</div>
);
};
export default Home;