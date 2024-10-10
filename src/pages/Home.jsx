import React from 'react';

const Profile = ({ imageSrc }) => {
    return (
        <div className="flex gap-10 flex-col text-10xl md:flex-row items-center justify-center min-h-screen bg-yellow-100 p-6">
            {/* First Div: Text Section */}
            <div className=" mb-8 md:mb-0 md:mr-10">
                <h1 className="text-4xl font-extrabold text-yellow-600 drop-shadow-md">Hi There! 👋🏻</h1>
                <h2 className="text-3xl font-bold text-yellow-500 my-2">I'M HAMMAD ULLAH</h2><br />
                <p className="text-xl text-yellow-700 font-medium italic">MERN Stack Developer</p>
            </div>

            {/* Second Div: Image Section */}
            <div className="w-48 h-48 border-4 border-yellow-300 rounded-full overflow-hidden shadow-lg">
                <img 
                    src={imageSrc || "/images/hammad1.png"} 
                    alt="Profile of Hammad Ullah" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    );
};

export default Profile;
