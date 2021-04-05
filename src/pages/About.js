import React from "react";
import Title from "../components/Title";
const About = () => {
  return (
    <div className="inner">
      <Title lineContent1={"This is the"} lineContent2={"about page"} />
      <div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          incidunt velit voluptate quae ratione. Non mollitia aspernatur nulla
          eligendi officia?
        </p>
      </div>
    </div>
  );
};

export default About;
