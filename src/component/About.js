import React from "react";
import Title from "./Title";
import fire_pic from "../images/fire breakout.jpg";
import store_pic from "../images/fang zhen lor mee.jpg";

const About = () => {
  const title = "About us";
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veniam voluptatibus totam aspernatur quos ipsam dicta sequi, nobis, laudantium blanditiis a repellendus iure deserunt vero. Quo molestias ducimus iste nihil cumque enim consectetur dolor, vitae, eveniet porro nemo similique corporis ullam quas amet reprehenderit. Eligendi ad doloremque officia quis quia?";

  const passage = (
    <p>
      Education Minister Lawrence Wong, who is also the Member of Parliament
      (MP) for the constituency, posted a picture of the incident and explained
      that the source of fire came from one of the food stalls at the coffee
      shop.
      <br />
      <br />
      It was believed that a wok had caught fire due to overheating of the
      cooking oil.
      <br />
      <br />
      According to Wong, the chef managed to turn off the gas supply. However,
      the fire had already spread through the ventilation duct.
      <br />
      <br />
      Wong added that no one was injured, and the Singapore Civil Defence Force
      (SCDF) was able to put out the fire quickly.
    </p>
  );

  return (
    <>
      <Title title={title} paragraph={about} />

      <section>
        <h2>Fire broke out on 24 Dec 2020</h2>
        <div className="fire-img">
          <img src={fire_pic} alt="" />
          <p>
            <u>Source: https://mothership.sg/2020/12/cck-coffee-shop-fire/</u>
          </p>
        </div>
        {passage}
        <img className="auntie-img" src={store_pic} alt="" />
      </section>
    </>
  );
};

export default About;
