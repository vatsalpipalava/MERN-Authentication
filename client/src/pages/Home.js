import React from "react";
import Navbarmain from "../components/Navbarmain";

export default function Home() {
    return (
        <div>
            <Navbarmain />
            <div className="flex flex-col items-center justify-center h-screen pl-6 pr-6">
                <div className="flex flex-col mx-auto max-w-4xl">
                    <h1 className="text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                        Create Your Online
                    </h1>
                    <h1 className="text-center font-display text-5xl font-medium tracking-tight text-blue-600 sm:text-7xl">
                        Business Card
                    </h1>
                </div>
                <h2 className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-center text-slate-700">Make a lasting impression with a professional online presence!</h2>
                <div className="mt-10 flex justify-center gap-x-6">
                    <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" variant="solid" color="slate" href="/profile">
                        Get Started
                    </a>
                    <a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300" variant="outline" color="slate" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
                            </path>
                        </svg>
                        <span className="ml-3">Watch video</span>
                    </a>
                </div>
            </div>


        </div>
    );
}
