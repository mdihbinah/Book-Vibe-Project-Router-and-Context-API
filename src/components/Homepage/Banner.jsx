import React from 'react';
import hero_Img from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-[70vh] rounded-2xl mt-5 space-y-3 container m-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={hero_Img} className='w-[50%] h-[90%] rounded-2xl'
    />
    <div className='space-y-5'>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-success">View The List</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;