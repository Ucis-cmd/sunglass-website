import classes from "./CallToAction.module.css";

import Button from "./UI/Button";

const CallToAction = () => {
  return (
    <div className={classes.container}>
      <h1>Make it personal</h1>
      <h3>Design the perfect sunglasses for you</h3>
      <Button>Customize</Button>
    </div>
  );
};

export default CallToAction;
