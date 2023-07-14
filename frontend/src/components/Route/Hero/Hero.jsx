import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://i.ibb.co/0rxVhhd/parts-pairing-screen.jpg)",
  backgroundSize: "cover", // Adjusts the background image to cover the entire element
  backgroundPosition: "center", // Centers the background image within the element
  height: "400px", // Set the desired height
  width: "100%", // Set the desired width (here, it occupies the full width of the container)
}}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#00000] font-[600] capitalize`}
        >
          Best Collection for <br /> Mobile Parts
        </h1>
       
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
