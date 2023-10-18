import React from 'react'


export default function CreationsButton({text, href}){
	return (<a href={href} className="bg-white border border-2 border-black py-2 px-7 text-[14px] md:text-[18px] uppercase tracking-wider hover:text-white hover:bg-black transition duration-400">{text}</a>)
}