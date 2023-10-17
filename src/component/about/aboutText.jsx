import React from 'react'

export default function AboutText(){
	return (
		<div className=" w-fit md:overflow-y-auto flex flex-col lg:ml-[-25%]  justify-end md:mb-[-10px] lg:w-[60%]">
			<figcaption className="bg-white p-6 md:h-fit md:px-[50px] md:py-3 xl:max-w-[600px]">
				<h2 className="uppercase text-[36px] lg:text-[30px] md:text-left text-center tracking-wide my-5 font-300 font-josefin-sans xl:text-[56px]">the leader in interactive vr</h2>
				<p className="font-josefin-sans  text-slate-500 text-[18px] text-center md:text-left md:text-[18px] xl:text-[20px]" >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>
			</figcaption>
		</div>
	)
}