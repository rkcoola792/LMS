import React from 'react'
import { Top } from './components/Homepage/Section4';

const Course = () => {
  return (
    <div className="course flex  gap-2">
      <div className="w-[60%] flex flex-col gap-2">
        <div className="headings">
          <h1 className="text-2xl mb-2">DEsign dynamics</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis mollis risus. Praesent eu arcu pretium, dignissim massa eget,
            posuere orci
          </p>
          <button className="bg-pink p-4 px-6 text-white">
            Take This Course
          </button>
          <h1>
            Total Duration : 27 years, 9 months , Students : 22 , by John Adam
          </h1>
        </div>
        <div className="description"></div>
        <p>
          Duis dictum justo sit amet fringilla vestibulum. Fusce ac posuere
          risus, id fermentum massa. Proin vel ligula diam. Nunc porttitor nulla
          erat, in egestas ligula maximus eget. Suspendisse a nibh nisi. Aliquam
          erat volutpat. Ut sollicitudin aliquet leo, vitae aliquam enim
          imperdiet ac. Proin eget est sit amet tortor mattis fringilla vitae id
          nunc.
        </p>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NXVYdPQJFCw?si=iWoGymi5B-RiloPS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-4">
        <div className="image">
          <img
            src="https://demos.wplms.io/mooc/wp-content/uploads/2020/07/c12-768x558.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl">About the instructor</h1>
          <p>
            {" "}
            Vivamus ullamcorper eros magna, ac gravida lorem ultrices sed. Donec
            sit amet nulla convallis, consequat metus non, tristique nisi. Duis
            ut sapien dignissim, viverra lacus eget, ultricies ex.
          </p>
        </div>
        <div className="flex flex-col mt-12 mb-12">
          <img
            src="https://demos.wplms.io/mooc/wp-content/uploads/avatars/1/t13-bpfull.png"
            alt=""
            className="h-[200px] object-cover"
          />
          <p className="text-3xl">John Adam</p>
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <button className="bg-pink-400 p-4 text-white">See Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Course
