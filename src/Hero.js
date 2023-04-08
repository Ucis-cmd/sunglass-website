import classes from "./Hero.module.css";

import Button from "./UI/Button";

const Hero = () => {
  return (
    <div className={classes.container}>
      <img src="sunglasses.png" className={classes.img}></img>
      <div className={classes.cta}>
        <h1>Sunglasses you will love</h1>
        <h3>Design them yourself</h3>
        <Button>Customize</Button>
      </div>
    </div>
  );
};

export default Hero;
