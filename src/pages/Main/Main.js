import React from "react";
import { Helmet } from "react-helmet";

import { Navbar, Footer, Landing, About, Blog } from "../../components";
// import { headerData } from '../../data/headerData'

function Main() {
  return (
    <div>
      <Helmet>
        <title>TheNFTMasterclass</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      {/* <Skills /> */}
      {/* <Education />             */}
      {/* <Projects /> */}
      {/* <Achievement /> */}
      <Blog />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default Main;
