import React from 'react'


const CoursesDiv=({title,subheading,img})=>{
    return (
      <div className="w-[200px] h-[100px] relative">
        <img src={img} alt="" />
        <div className="absolute top-8 flex flex-col gap-4 p-2 text-white">
          <h1 className="text-xl font-bold">{title}</h1>
          <h1>{subheading}</h1>
        </div>
      </div>
    );
}
const Section2 = () => {
  const courses = [
    {
      title: "Design Dynamics",
      subheading: "Design info",
      img: "https://demos.wplms.io/mooc/wp-content/uploads/2020/07/c4-460x334.jpg",
    },
    {
      title: "Undestanding color",
      subheading: "Design",
      img: "https://demos.wplms.io/mooc/wp-content/uploads/2020/07/c12-460x334.jpg",
    },
    {
      title: "Minimilistic design",
      subheading: "Design",
      img: "https://demos.wplms.io/mooc/wp-content/uploads/2022/09/c11.jpg",
    },
    {
      title: "Machin learning",
      subheading: "INteliigence technology",
      img: "https://demos.wplms.io/mooc/wp-content/uploads/2020/07/c12-460x334.jpg",
    },
  ];
  return (
    <div className='flex flex-col '>
    <div><h1 className=''>Heading</h1></div>
      <div className="flex gap-8 mt-24">
        {courses.map((ele) => (
          <CoursesDiv
            title={ele.title}
            subheading={ele.subheading}
            img={ele.img}
          ></CoursesDiv>
        ))}
      </div>
    </div>
  );
}

export default Section2
