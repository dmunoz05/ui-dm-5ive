export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between px-24`}>
      <div className='z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex flex-col pt-24'>
        <div className='flex flex-col justify-center w-full'>
          <h1 className='font-bold text-7xl text-center' >UI dm-5ive</h1>
        </div>
        <div className='p-2'><span>Library for components in your UI</span></div>
      </div>
    </main>
  );
}
