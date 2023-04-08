import classes from "./Steps.module.css";

const Steps = () => {
  return (
    <div className={classes.container}>
      <h1>How it works</h1>
      <div className={classes.stepContainer}>
        <h2>Choose a template</h2>
        <p>
          We have more than 50 shapes for sunglasses, so you will find the one
          perfect for you!
        </p>
      </div>
      <div className={classes.stepContainer}>
        <h2>Design</h2>
        <p>Choose a color, tint and material. Even add your own logo!</p>
      </div>
      <div className={classes.stepContainer}>
        <h2>Get it delivered</h2>
        <p>We have free delivery to 90 countries!</p>
      </div>
    </div>
  );
};

export default Steps;
