import * as React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container">
        <h3>Welcome to Family Jewels</h3>
        <p>Please login to track your valuables!</p>
        <button>Login</button>
      </div>
    </>
  );
}

export default Home;
