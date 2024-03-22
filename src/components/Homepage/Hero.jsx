import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-[100%] relative ">
      <div className="image h-[70%] overflow-hidden relative">
        <img
          src="https://demos.wplms.io/mooc/wp-content/uploads/2022/09/bg.png"
          alt=""
          className="object-fit"
        />
        <div className="headings absolute top-24 px-8 flex flex-col gap-4 justify-left items-start">
          <h1 className="text-3xl ">Learn Online. Anywhere . Anytime</h1>
          <p className="">3000 specialists Industry experts. 2m+ Students.</p>
          <button className="bg-[#ff51b3] p-4 rounded-lg text-white px-8">
            <p>Start learning online</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
