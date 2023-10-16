import React from 'react'

export default function Hero(){
	return(
		<header className="bg-[url(images/desktop/image-hero.jpg)] bg-center h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center">
			<div className="container mx-auto">
				<div className="p-4 md:z-[0] bg-transparent border-4 inline-block border-white  w-auto ml-3 mx-auto lg:w-[50vw]">
					<h1 className="font-josefin-sans font-light text-white uppercase tracking-widest text-[40px] md:text-[56px] w- font-thin ">immercive</h1>
					<h1 className="font-josefin-sans font-light text-white uppercase tracking-widest text-[40px] md:text-[56px] w- font-thin ">experiences</h1>
					<h1 className="font-josefin-sans font-light text-white uppercase tracking-widest text-[40px] md:text-[56px] w- font-thin ">that deliver</h1>
				</div>
			</div>
		</header>
	)
}