/* This example requires Tailwind CSS v2.0+ */


import Image from 'next/image';

export default function Hero(props) {
  return (
    <div className='relative bg-gray-50'>
      <main className='lg:relative'>
        <div className='mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
            <Image
              className='w-300 h-300 object-none object-left-top pl-5'
              src={props.iconUrl}
              alt=''
              width='300'
              height='300'
            />
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>{props.headLine}</span>{' '}
              {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
            </h1>

            {props.children.map((child) => {
              if (child.type == 'file') {
                return (
                  <div
                    key={child.id}
                    className='mt-10 sm:flex sm:justify-center lg:justify-start'
                  >
                    <div className='rounded-lg shadow'>
                      <a
                        href={child.url}
                        className='flex w-full items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-gray-900 hover:bg-red-500 md:py-4 md:px-10 md:text-lg'
                      >
                        {child.caption}
                      </a>
                    </div>
                  </div>
                );
              } else {
                return (
                  <p
                    key={child.id}
                    className='mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'
                  >
                    {child.text}
                  </p>
                );
              }
            })}

            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Live demo
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <Image
            className='absolute inset-0 h-full w-full object-cover'
            src={props.coverUrl}
            alt=''
            layout='fill'
          />
        </div>
      </main>
    </div>
  );
}
