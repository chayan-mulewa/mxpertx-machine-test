import React from 'react'

function Header() {
    return (
        <div className='h-16 w-full flex flex-row p-16 justify-between items-center text-center '>
            <div>
                {/* <img src={`https://ik.imagekit.io/dev24/${imagePath}`} alt="" /> */}
                <button className='text-2xl'>BrainyLingo</button>
            </div>
            <div className='flex flex-row gap-16'>
                <button>Home</button>
                <button>Leaderboard</button>
                <button>Daliy Quiz</button>
                <button>Gender</button>
            </div>
            <div><button className='px-8 py-4 rounded-3xl' style={{ background: 'linear-gradient(270deg, #3d8fb8 0%, #7657bc 100%)' }}>Sign Out</button></div>
        </div>
    )
}

export default Header
