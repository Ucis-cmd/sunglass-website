import classes from "./Features.module.css";

import { Colorfilter, MedalStar, Truck } from "iconsax-react";

const Features = () => {
  return (
    <div className={classes.container}>
      <h1>Why Us?</h1>
      <div className={classes.features}>
        <div className={classes.featureContainer}>
          <Colorfilter size="70"></Colorfilter>
          <h2>Wide range of colors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
            sagittis nisl rhoncus mattis rhoncus.
          </p>
        </div>
        <div className={classes.featureContainer}>
          <MedalStar size="70"></MedalStar>
          <h2>High quality materials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
            sagittis nisl rhoncus mattis rhoncus.
          </p>
        </div>
        <div className={classes.featureContainer}>
          <Truck size="70"></Truck>
          <h2>Free delivery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
            sagittis nisl rhoncus mattis rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
