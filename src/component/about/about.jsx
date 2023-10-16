import React from 'react'
import AboutImage from './AboutImage'
import AboutText from './AboutText'

export default function About(){
	return (
		<section id="about" className="container mx-auto p-5 my-[100px] flex flex-col items-center align-center lg:items-end lg:flex-row w-full">
			<AboutImage />
			<AboutText />
		</section>
	)
}