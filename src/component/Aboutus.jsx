// import React from "react";
// import "./Aboutus.css"
// const Aboutus = () => {
//   return (
//     <>
//       <div className="aboutus">
//         <div className="aboutusleft">
          
//           <img src="./src/images/aboutusimg.png" alt="" id="aboutusimg" />
//           <img src="./src/images/Glow.png" alt=""  id="aboutus-glow2"/>
//         </div>
//         <div className="aboutusright">
//           <h1 className="aboutus-h1"> ABOUT US</h1>
//           <p className="aboutus-p">
//             {" "}
//             Bitnet.live is a pioneering tech hub dedicated to exploring and
//             promoting emerging technologies. Our team consists of industry
//             experts, innovators, and enthusiasts committed to delivering
//             high-quality content, products, and services.<br/> We believe in the
//             transformative power of technology and work tirelessly to bring the
//             most relevant and impactful innovations to our audience.{" "}
//           </p>
//           <img src="./src/images/Glow.png" alt=""  id="aboutus-glow"/>
//         </div>
//       </div>
//       <div className="header2"> </div>
//     </>
//   );
// };

// export default Aboutus;



// Aboutus.jsx
import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus" id="aboutus">
        <div className="aboutusleft">

         <img src="./src/images/aboutusshadownleft.svg" alt="" className="abtshadowleft" />
          <img src="./src/images/Group10.png" alt="" id="aboutusimg" />

        </div>
        <div className="aboutusright">
        <img src="./src/images/aboutusshadownright.svg" alt="" className="abtshadowright" />
    
          <h1 className="aboutus-h1"> ABOUT US</h1>
          <p className="aboutus-p">
            Bitnet.live is a pioneering tech hub dedicated to exploring and
            promoting emerging technologies. Our team consists of industry
            experts, innovators, and enthusiasts committed to delivering
            high-quality content, products, and services.
          </p>
          <p className="aboutus-p"> We believe in the
            transformative power of technology and work tirelessly to bring the
            most relevant and impactful innovations to our audience.</p>

        </div>
      </div>
      {/* <div className="header2"> </div> */}
    </>
  );
};

export default Aboutus;
