import React from 'react'
import AboutImage from './AboutImage'
import AboutText from './AboutText'

export default function About(){
	return (
		<section id="about" className="container mx-5 sm:mx-auto p-5 my-[100px] w-[90%] sm:w-fit flex flex-col items-center align-center lg:items-end lg:flex-row md:w-full">
			<AboutImage />
			<AboutText />
		</section>
	)
}