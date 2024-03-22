import React from 'react'

const Section1Component = ({title,subheading,img}) => {
  return (
    <div className="w-[200px] h-[100px] relative">
      <img src={img} alt="" />
      <div className='absolute top-8 flex flex-col gap-4 p-2 text-white'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <h1>{subheading}</h1>
      </div>
    </div>
  );
}

export default Section1Component
