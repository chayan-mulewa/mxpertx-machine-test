import React, { useState, useEffect, useRef } from 'react';
import { Header, Card } from '../components/index';
import axios from 'axios';

function Page1() {
  const parallaxRef = useRef(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://child.onrender.com/api/sciencefiction');
        setData(response.data);
        setTotalPages(Math.ceil(response.data.length / 8));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset;
        const parallaxOffset = -(scrollTop * 0.5);
        parallaxRef.current.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
      }
    };
    window.addEventListener('scroll', parallaxEffect);

    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, []);

  const imagePath = "The_Galactic_Time_Travelers_qOkLSv4b3.png";

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * 8;
  const endIndex = currentPage * 8;

  return (
    <div
      className='h-screen w-screen flex flex-col bg-slate-800 text-white overflow-x-auto'>
      <div ref={parallaxRef} style={{ backgroundImage: `url(https://img.freepik.com/free-photo/galaxy-glowing-starfield-illuminates-dark-night-sky-generated-by-ai_188544-15600.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed', scrollBehavior: 'smooth' }}>
        <Header />
        <div className='w-full h-full flex flex-col gap-16 p-8 items-center'>
          <div className='text-3xl'><h1>Science Fiction Stories</h1></div>
          <div className='flex flex-row gap-16'>
            <button className='px-8 py-4 rounded-3xl bg-blue-600'>New</button>
            <button className='px-8 py-4 rounded-3xl bg-yellow-400'>In Progress</button>
            <button className='px-8 py-4 rounded-3xl bg-green-600'>Completed</button>
            <button className='px-8 py-4 rounded-3xl' style={{ background: 'linear-gradient(270deg, #3d8fb8 0%, #7657bc 100%)' }}>Clear All</button>
          </div>
        </div>
      </div>
      <div className=' bg-slate-800'>
        <div className='grid grid-flow-col grid-rows-2 gap-9 p-16 justify-center items-center'>
          {data && (
            data.slice(startIndex, endIndex).map((item, index) => (
              <Card key={index} title={item.Title} image={item.Image} buttonStatus={item.Status} />
            ))
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClickPrev}>Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClickNext}>Next</button>
        </div>
      </div>

    </div>
  );
}

export default Page1;
