import React from 'react'
import { Top } from './components/Homepage/Section4'
import { Link } from 'react-router-dom';


const SingleCourse=()=>{
    return ()=>{
        <div>
          <Top
            img=""
            name="John Adam"
            ratings="4"
            peopleInvolved="347"
            image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
          ></Top>
        </div>;
    }
}

const Courses = () => {
  return (
    <div className="flex flex-wrap  gap-8">
      <div className="course">
        <Link to="1">
          <Top
            img=""
            name="John Adam"
            ratings="4"
            peopleInvolved="347"
            image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
          ></Top>
        </Link>
      </div>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
      <Top
        img=""
        name="John Adam"
        ratings="4"
        peopleInvolved="347"
        image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
      ></Top>
    </div>
  );
}

export default Courses
