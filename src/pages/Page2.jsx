import { useState, useEffect } from 'react';
import { Header, Card } from '../components/index';
import axios from 'axios';

function Page2() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://child.onrender.com/api/sciencefiction');
        setData(response.data);
        console.log(response.data[0]);
        setTotalPages(Math.ceil(response.data.length / 8));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      <div>
        <Header />
        <div className='w-full h-full flex flex-col gap-16 p-8 items-center'>
          <div className='text-3xl'><h1>The Lost City Of Future Earth</h1></div>
          <div className='flex flex-row gap-16'>
            <button
              className='px-8 py-4 rounded-3xl border-white hover:bg-blue-700 transition-colors border-transparent border'
            >
              World Explore
            </button>
            <button
              className='px-8 py-4 rounded-3xl border-white hover:bg-yellow-500 transition-colors border-transparent border'
            >
              Story Adventure
            </button>
            <button
              className='px-8 py-4 rounded-3xl border-white hover:bg-green-700 transition-colors border-transparent border'>
              Brain Quest
            </button>
            {/* <button className='px-8 py-4 rounded-3xl' style={{ background: 'linear-gradient(270deg, #3d8fb8 0%, #7657bc 100%)' }}>Clear All</button> */}
          </div>
        </div>

      </div>
      <div className=' flex flex-col justify-center p-4 items-center bg-slate-900'>
        <div><h1>Drag Picture to the matching words, light uo correct pairs, shake for a retry</h1></div>

        <div className='h-full w-full grid grid-flow-col grid-rows-2   gap-9 p-16 justify-end items-end'>

        {data && data[0] && (
  data.slice(startIndex, endIndex).map((item, index) => (
    <Card
      key={index}
      // title={item.Title}
      description={item.Wordexplore.length > 0 ? item.Wordexplore[0].Storytitle : ""}
      image={item.Image}
      // buttonStatus={item.Status}
    />
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

export default Page2;
