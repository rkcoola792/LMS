import React from 'react'
import Section1Component from './Section1Component'
import { Link } from 'react-router-dom';

const Section1 = () => {
    const courses = [
      {
        title: "Design",
        subheading: "180 courses, 1200 students",
        img: "https://demos.wplms.io/mooc/wp-content/uploads/2022/09/c11.jpg",
      },
      {
        title: "Technology",
        subheading: "180 courses, 1200 students",
        img: "https://demos.wplms.io/mooc/wp-content/uploads/2022/09/c11.jpg",
      },
      {
        title: "Intelligence",
        subheading: "180 courses, 1200 students",
        img: "https://demos.wplms.io/mooc/wp-content/uploads/2022/09/c11.jpg",
      },
      {
        title: "Information",
        subheading: "180 courses, 1200 students",
        img: "https://demos.wplms.io/mooc/wp-content/uploads/2022/09/c11.jpg",
      },
    ];
  return (
    <div className="flex gap-8 mt-12 cursor-pointer">
      {courses.map((ele) => (
        <Link to="/courses">
          <Section1Component
            title={ele.title}
            subheading={ele.subheading}
            img={ele.img}
          ></Section1Component>
        </Link>
      ))}
    </div>
  );
}

export default Section1
