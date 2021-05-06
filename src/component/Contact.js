import React from "react";
import Title from "./Title";

const Contact = () => {
  const title = "Contact Us";
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi unde illo, quos labore dignissimos placeat quia vel explicabo animi aliquam porro molestiae, rerum ex quam iusto delectus tempore fuga odio, eveniet impedit dolor optio nam voluptatibus? Totam, rem doloremque?";

  return (
    <>
      <Title title={title} paragraph={description} />

      <section>
        <form action="#">
          <div className="form-container">
            <div className="row">
              <label htmlFor="">Name: </label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="row">
              <label htmlFor="">Subject: </label>
              <select name="" id="">
                <option value=""></option>
                <option value="">General enquiry</option>
                <option value="">Leasing</option>
                <option value="">Feedback / Complain</option>
                <option value="">Commendation</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="">Message: </label>
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="row">
              <button type="submit">SEND</button>
            </div>
          </div>
        </form>
        <div className="location-container">
          <div className="location-details">
            <h3>Contact Details</h3>
            <a href="tel:+65 66667777">+65 66667777</a>
            <a href="mailto:enquire@s11pe.com">enquire@s11pe.com</a>
          </div>
          <img src="./images/s11 map.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Contact;
