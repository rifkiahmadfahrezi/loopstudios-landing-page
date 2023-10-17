import React from 'react'
import CreationsTitle from './CreationsTitle'
import CreationsButton from './CreationsButton'
import CreationsCard from './CreationsCard'

export default function Creations(){

	const images = ["deep-earth", "night-arcade","soccer-team", "grid", "from-above","pocket-borealis","curiosity",  "fisheye"]
	function getText(str){
		if(str.split("-").length == 1){
			return `the ${str}`
		}else{
			return str.split("-").join(" ")
		}
	}

	let screenWidth = window.innerWidth

	// get current screen width if screen resized
	function getCurrentWidth(){
		window.addEventListener("resize", () => {
			screenWidth = window.innerWidth
		})
	}

	console.log(screenWidth)

	return (
		<section id="creations" className="container mx-5 sm:mx-auto">
			<div className="flex items-center justify-between my-6">
				<CreationsTitle />
				<CreationsButton text="see all" href="#" />
			</div>
			<div className="my-[35px] grid lg:grid-cols-4 gap-[25px] grid-cols-1">
				{screenWidth >= 1024 ? 
					images.map((img, i) => <CreationsCard text={getText(img)} key={i} cardImg={`./images/desktop/image-${img}.jpg`}alt={img}/> )
					:
					images.map((img, i) => <CreationsCard text={getText(img)} key={i} cardImg={`./images/mobile/image-${img}.jpg`}alt={img}/> )
				}
			</div>
		</section>
	)
}