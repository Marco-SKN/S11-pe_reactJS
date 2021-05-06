import React from "react";
import Title from "./Title";

const Career = () => {
  const title = "Career";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic eum consequatur! Iste molestias corporis tenetur, incidunt accusantium quisquam ipsam enim. Alias rerum dolores deserunt, nesciunt pariatur ullam in neque amet repudiandae itaque harum eos, excepturi quos error iusto nulla.";

  return (
    <>
      <Title title={title} paragraph={description} />

      <section>
        <div className="career-container">
          <h2>Jobs opportunities</h2>
          <div className="job-listing">
            <ul>
              <div className="listing-item">
                <li>
                  <h3>Junior Chef</h3>
                  <p>Full-time</p>
                  <p>0-1 years experience</p>
                </li>
                <button>Apply</button>
              </div>
              <div className="listing-item">
                <li>
                  <h3>Delivery Rider</h3>
                  <p>Part-time</p>
                  <p>0-1 years experience</p>
                </li>
                <button>Apply</button>
              </div>
              <div className="listing-item">
                <li>
                  <h3>System Analyst</h3>
                  <p>Full-time</p>
                  <p>1-2 years experience</p>
                </li>
                <button>Apply</button>
              </div>
              <div className="listing-item">
                <li>
                  <h3>Project Manager</h3>
                  <p>Full-time</p>
                  <p>3-5 years experience</p>
                </li>
                <button>Apply</button>
              </div>
            </ul>
          </div>
          <p>For more jobs opportunities, you may drop an email to:</p>
          <a href="mailto:career@s11pe.com">career@s11pe.com</a>
        </div>
      </section>
    </>
  );
};

export default Career;
