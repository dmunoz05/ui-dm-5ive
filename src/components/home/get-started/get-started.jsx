"use client"

import React, { useState } from 'react'
import IconCopy from '@ui-dm-5ive/assets/icons/iconCopy';
import IconNotCopy from '@ui-dm-5ive/assets/icons/iconNotCopy';

export default function GetStarted() {

  const [text] = useState('npm install ui-dm-five');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  };

  return (
    <div className='grid justify-center items-center mt-12'>
      <h2 className='text-lg text-center font-bold pb-2'>Get Started</h2>
      <section className='relative'>
        <input disabled className='w-fit bg-[#9b9b9b] h-8 border-2 rounded-lg p-7 border-black outline-none text-black flex justify-center text-center'
          value={text} />
        <button className='absolute top-1 right-1' onClick={handleCopy} style={{ cursor: 'pointer' }}>
          {copied ? <IconCopy /> : <IconNotCopy />}
        </button>
      </section>
    </div>
  );
};
