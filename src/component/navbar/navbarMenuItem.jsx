import React from 'react'

export default function NavbarMenuItem({link, text}){
	return (<a className="font-alata text-[30px] my-3 uppercase mx-4 md:text-lg font-sans text-slate-50 relative hover:text-white hover:text-bold after:content[''] after:scale-0 after:w-6/12 hover:after:scale-100 hover:after:h-0.5 hover:after:bg-white hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:rounded-md transition hover:after:duration-500 hover:after:origin-bottom-left md:hover:after:origin-center font-normal ease-in-out md:capitalize" href={link}>{text}</a>)
}