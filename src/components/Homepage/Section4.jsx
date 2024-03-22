import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
export const Top=({image,name,ratings,peopleInvolved})=>{
    return (
      <div className="  w-[200px] h-[300px] border border-black mb-12">
        <img src={image} alt="" />
        <h1 className="text-2xl ">{name}</h1>
        <h1 className="">
          {ratings}
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
        </h1>
        <p>{peopleInvolved}<PeopleIcon></PeopleIcon></p>
      </div>
    );
}

const Section4 = () => {
  return (
    <div className='flex gap-8'>
      <div className="flex h-[200px] mt-24 w-[200px] ">
        <Top
          img=""
          name="John Adam"
          ratings="4"
          peopleInvolved="347"
          image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
        ></Top>
      </div>
      <div className="flex h-[200px] mt-24 w-[200px] ">
        <Top
          img=""
          name="John Adam"
          ratings="4"
          peopleInvolved="347"
          image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
        ></Top>
      </div>
      <div className="flex h-[200px] mt-24 w-[200px] ">
        <Top
          img=""
          name="John Adam"
          ratings="4"
          peopleInvolved="347"
          image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
        ></Top>
      </div>
      <div className="flex h-[200px] mt-24 w-[200px] ">
        <Top
          img=""
          name="John Adam"
          ratings="4"
          peopleInvolved="347"
          image="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
        ></Top>
      </div>
    </div>
  );
}

export default Section4
