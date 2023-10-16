import React from 'react'

export default function AboutText(){
	return (
		<div className=" w-fit md:max-w-[50%] md:overflow-y-auto flex flex-col lg:ml-[-15%]  justify-end md:mb-[-10px] lg:w-[60%]">
			<figcaption className="bg-white p-6 md:h-fit md:px-[50px] md:py-3 xl:max-w-[600px]">
				<h2 className="uppercase text-[36px] md:text-left text-center tracking-wider my-5 font-300 font-josefin-sans xl:text-[56px]">the leader in interactive vr</h2>
				<p className="font-josefin-sans  text-slate-500 text-[18px] text-center md:text-left md:text-[18px] xl:text-[20px]" >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>
			</figcaption>
		</div>
	)
}