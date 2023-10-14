import React from 'react'

export default function Hero(){
	return(
		<header className="bg-[url(images/desktop/image-hero.jpg)] bg-center h-screen bg-cover bg-no-repeat bg-center">
			<div className="container mx-auto">
				<div className="p-4 absolute bg-transparent border-4 inline-block border-white top-2/4 translate-y-[-50%] w-[50vw]">
				<h1 className="text-white uppercase tracking-widest text-[56px] w- font-thin ">immercive</h1>
				<h1 className="text-white uppercase tracking-widest text-[56px] w- font-thin ">experiences</h1>
				<h1 className="text-white uppercase tracking-widest text-[56px] w- font-thin ">that deliver</h1>
			</div>
			</div>
		</header>
	)
}