import React from "react";
import "./Banner.css";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/220px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">Moive Name</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h3 className="banner-description">
          {truncate(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Auctor elit sed vulputate mi sit amet mauris. Risus pretium quam vulputate dignissim suspendisse in est. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Lectus mauris ultrices eros in. Pretium quam vulputate dignissim suspendisse in. Purus non enim praesent elementum facilisis leo vel. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida neque convallis a cras semper auctor. Potenti nullam ac tortor vitae purus faucibus ornare. Massa enim nec dui nunc mattis. Adipiscing tristique risus nec feugiat. Duis ultricies lacus sed turpis. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Accumsan sit amet nulla facilisi morbi tempus. Aliquam sem fringilla ut morbi tincidunt augue. Neque vitae tempus quam pellentesque nec nam. In metus vulputate eu scelerisque. Odio ut sem nulla pharetra diam sit amet.
           viverra orci sagittis eu volutpat odio. `,
            150
          )}
        </h3>
      </div>
      <div className="banner-fadeButton" />
    </header>
  );
};

export default Banner;
