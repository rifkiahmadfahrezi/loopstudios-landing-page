import React from 'react'

export default function CreationsCard({cardImg, alt, text}){
	return (
		<div className="relative z-auto cursor-pointer overflow-hidden max-h-[200px] lg:max-h-[unset] before:content-[''] before:h-full before:left-0 before:bottom-0 before:w-full before:bg-gradient-to-r before:from-black before:to-[transparent] before:absolute object-cover lg:before:w-0 lg:h-full hover:after:content-[''] hover:after:w-full hover:after:bg-white hover:after:opacity-[50%] hover:after:h-full hover:after:absolute hover:after:bottom-0 hover:after:left-0 [&>h3]:hover:text-black [&>h3]:hover:font-semibold [&>img]:hover:scale-110 hover:after:z-[0]">
			<img src={cardImg} alt={alt} className="w-full transition duration-300"/>
			<h3 className="absolute left-[10%] md:left-[17%] leading-[35px] bottom-[10%] text-white text-[35px] tracking-wider uppercase z-[1]">{text}</h3>
		</div>
	)
}