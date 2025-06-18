
"use client";

import { Button, Card } from "flowbite-react";

export function Announcements() {
  return (
    <>
    <div className="mt-4 py-4">
      <div>
      <div>
      <h2 className="text-gray-500 text-3xl font-bold text-center mb-12"><span className="text-main">A</span>nnouncements</h2>
      </div>
      </div>
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <Card className="max-w-sm container rounded-md mt-3 px-4 py-4 ">
       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Noteworthy technology acquisitions 2021
       </h5>
       <p className="font-normal text-gray-700 dark:text-gray-400">
         Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order.
       </p>
       <Button className="bg-main rounded-md p-2 ">
         Read more
         <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
           />
          </svg>
        </Button>
     </Card>
     <Card className="max-w-sm container rounded-md mt-3 px-4 py-4">
       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
       </h5>
       <p className="font-normal text-gray-700 dark:text-gray-400">
         Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order.
       </p>
        <Button className="bg-main rounded-md p-2 ">
           Read more
         <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
          </svg>
        </Button>
       </Card>
        <Card className="max-w-sm container rounded-md mt-3 px-4 py-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
       </h5>
       <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order.
       </p>
        <Button className="bg-main rounded-md p-2 ">
           Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    </div>
    </div>
    </>
  );
}
