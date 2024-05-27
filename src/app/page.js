import Logo from "@ui-dm-5ive/components/logo/logo";
import GetStarted from "@ui-dm-5ive/components/home/get-started/get-started";

export default function Home() {
  return (
    <main className={`flex h-full flex-col items-center justify-between px-24`}>
      <section id='section-logo-home' className='flex flex-col items-center justify-center w-full'>
        <div className='z-10 w-full h-full items-center justify-center gap-8 text-sm lg:flex flex-col pt-24'>
          <div className='flex flex-col justify-center w-full'>
            <h1 className='font-bold text-7xl text-center' >UI dm-5ive</h1>
          </div>
          <div className='p-2'><span>Library of components for your project</span></div>
          <GetStarted />
        </div>
      </section>
    </main>
  );
}
