import React from 'react';

const Img = ({ setImage, setCaption }) => {
    return (
        <div>
            <div className='w-full relative mb-2'>
                <input
                    type='file'
                    accept='image/*'
                    className='block w-full text-sm text-gray-900 bg-gray-700 border-gray-600 rounded-lg cursor-pointer focus:outline-none'
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <div className='w-full relative mb-2'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Add a caption (optional)'
                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Img;