import SlideBarDocumentation from "./slide-bar-documentation"

export default function Documentation() {

  return (
    <div className='h-full w-full'>
      <aside className='fixed z-10 left-0 top-0 border-r-2 border-white h-full w-1/5 pt-14'>
        <div className='h-full w-full p-6'>
          <div className='flex flex-col w-full pb-6'>
            <h1 className='font-bold text-xl'>Documentation</h1>
          </div>
          <SlideBarDocumentation />
        </div>
      </aside>
      <section className='flex flex-col ml-72 pt-14 h-full'>
        <div className='z-10 w-full h-full items-start gap-6 text-sm lg:flex flex-col py-6 px-20'>
          <section id="get-started">
            <div>
              <h1 className='font-bold text-2xl'>Get started</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
          <section id="overview">
            <div>
              <h1 className='font-bold text-2xl'>Overview</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
          <section id="download">
            <div>
              <h1 className='font-bold text-2xl'>Download</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
          <section id="usage">
            <div>
              <h1 className='font-bold text-2xl'>Usage</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
          <section id="help">
            <div>
              <h1 className='font-bold text-2xl'>Help</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
          <section id="term-and-privacity">
            <div>
              <h1 className='font-bold text-2xl'>Terms and privacity</h1>
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
            <br />
          </section>
        </div>
      </section>
    </div>
  )
}