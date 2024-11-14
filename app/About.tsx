import React from "react";

const About = () => {
  return (
    <div className="flex w-full py-8">
      
        <div className="flex max-w-6xl w-full mx-auto sm:flex-col sm:items-center sm:align-middle justify-center p-4 gap-4 ">
          <h2 className="text-3xl font-bold w-full sm:text-center">Research Interest</h2>
          <div className=" flex flex-col gap-4 sm:text-center">
            <p className="text-xl ">
              Highly motivated software engineer with [Number] years/s
              experience designing, developing, and deploying scalable,
              efficient, and reliable software solutions. Proficient in frontend
              (HTML, CSS, JavaScript, React, Next.js) and backend development
              (Node.js, Express, RESTful APIs). Skilled in Agile methodologies,
              state management, and database management.
            </p>
            <p className="text-xl">
              I excel in collaborative environments, leveraging strong
              problem-solving, communication, and adaptability skills.
              Passionate about delivering high-quality solutions, optimizing
              performance, and embracing emerging technologies.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
