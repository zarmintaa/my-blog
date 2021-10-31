import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          alt="An Image"
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, Iam Mamang</h1>
      <p>
        I Blog about web development - especially frontend frameworks line React
        or Vue.js
      </p>
    </section>
  );
};

export default Hero;
