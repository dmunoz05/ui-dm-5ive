import GetStarted from "@ui-dm-5ive/components/home/get-started/get-started";
import Link from "next/link";
import IconGithub from "@ui-dm-5ive/assets/icons/iconGithub";

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between px-24`}>
      <section id='section-logo-home' className='flex flex-col items-center justify-center w-full my-20 py-10'>
        <div className='z-10 w-full h-full items-center justify-center gap-8 text-sm lg:flex flex-col'>
          <div className='flex flex-col justify-center w-full'>
            <h1 className='font-bold text-7xl text-center' >UI dm-5ive</h1>
          </div>
          <div className='p-2'><span>Library of components for your project</span></div>
          <div className='flex gap-5'>
            <Link className='p-2 bg-white rounded-lg text-black'
              href="/documentation">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-between w-full my-10 py-10'>
        <div className='z-10 w-full h-full items-center justify-center gap-8 text-sm lg:flex flex-col pt-24'>
          <div className='flex flex-col justify-center w-full'>
            <h1 className='font-bold text-3xl text-center'>Simple to use and install</h1>
          </div>
          <div className='p-2'><span>The library of components in your project simple to use, you can download and add the package to your project</span></div>
            <GetStarted />
          <div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-between w-full my-10 py-10'>
        <div className='z-10 w-full h-full items-center justify-center gap-8 text-sm lg:flex flex-col pt-24'>
          <div className='flex flex-col justify-center w-full'>
            <h1 className='font-bold text-3xl text-center'>Characteristics</h1>
          </div>
          <div className="container">
            <div data-text="Intuitive" className="glass">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
            </div>
            <div data-text="Simple" className="glass">
              <svg viewBox="0 0 640 512" height="1em">
                <path
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                ></path>
              </svg>
            </div>
            <div data-text="Easy" className="glass">
              <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-between w-full my-10 py-10'>
        <div className='z-10 w-full h-full items-center justify-center gap-8 text-sm lg:flex flex-col pt-24'>
          <div className='flex flex-col justify-center w-full'>
            <h1 className='font-bold text-3xl text-center'>Contribute</h1>
          </div>
          <div className='p-2'><span>You can contribute to the project by sending a pull request or opening an issue</span></div>
          <a className='hover:scale-110 transition-transform' href="https://github.com/dmunoz05/ui-dm-five" target='__blank'>
            <IconGithub />
          </a>
        </div>
      </section>
    </main>
  );
}
