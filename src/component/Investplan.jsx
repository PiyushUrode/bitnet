import React from "react";
import "./Investplan.css"

const Investplan = () => {
  return (
    <div className="Investplan" id="Investmentplan">
      <div className="Investplan-div">

      <h1 className="Investplan-h1"> Investment Plan</h1>
      <p className="Investplan-p">
        {" "}
        Help agencies to define their new business objectives and then create
        professional software.
      </p>
      </div>

      <div className="cardmain">  
        {/* <img src="./src/images/investrightglow.png" alt="" className="investrightglow" /> */}
        <img src="./src/images/investleftglow.png" alt="" className="investleftglow" />
            <div className="Cards"> 
          <div className="card"> 
            <h1 className="carda"> Business Plan</h1>
            <h2 className="cardb"> $69 - $999</h2>
            <h2 className="cardc"> 6% Everyday</h2>
            <div className="line"> </div>
            <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will back :- <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul>
               <button className="cardsbutton"> InvestNow</button>

          </div>

          <div className="card"> 
            <h1 className="carda"> Baby <br />Plan</h1>
            <h2 className="cardb"> $99 - $888</h2>
            <h2 className="cardc"> 6% Everyday</h2>
            <div className="line"></div>
            <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul>
               <button className="cardsbutton"> InvestNow</button>

          </div>

          <div className="card"> 
            <h1 className="carda"> Hatchling Plan</h1>
            <h2 className="cardb"> $69 - $999</h2>
            <h2 className="cardc"> 6% Everyday</h2>
            <div className="line"></div>
            <ul className="cardsul" >
              <li className="cardsli"> Profit for life time </li>
              <li className="cardsli"> Capital will call back <span className="li-span"> yes</span> </li>
              <li className="cardsli">  Lifetime Earning </li>
               </ul>
               <button className="cardsbutton"> InvestNow</button>

          </div>
  
          <div className="card"> 
            <h1 className="carda"> Secondary Plan</h1>
            <h2 className="cardb"> $89 - $666</h2>
            <h2 className="cardc"> 6% Everyday</h2>
            <div className="line"></div>
            <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul>
               <button className="cardsbutton"> InvestNow</button>

          </div>

          <div className="card"> 
            <h1 className="carda"> Starter <br />Pack</h1>
            <h2 className="cardb"> $50 - $400</h2>
            <h2 className="cardc"> 6% Everyday</h2>
            <div className="line"></div>
            <ul className="cardsul">
              <li> Profit for life time </li>
              <li> Capital will call back <span className="li-span"> yes</span> </li>
              <li>  Lifetime Earning </li>
               </ul>
               <button className="cardsbutton"> InvestNow</button>

          </div>
         



      </div>

      </div>

    </div>
  );
};

export default Investplan;
