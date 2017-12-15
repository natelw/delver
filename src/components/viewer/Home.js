import React from 'react';

const Home = () => {
  return (
    <section>
      <div className="home-logo-box">
        <img className="delver-home-logo" src="https://i.imgur.com/UDI7zoe.png" alt="Delver"/>
      </div>
      <hr/>
      <p className="blurb-home"><h3>Welcome to the Delver Campaign Sheet.</h3> You can search the database on the left. Favourites are on the right, click the heart button to add to favourites to save for future viewing.</p>
    </section>
  );
};

export default Home;
