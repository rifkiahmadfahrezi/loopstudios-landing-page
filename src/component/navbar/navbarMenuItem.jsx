import React from 'react'

export default function NavbarMenuItem({link, text}){
	return (<a className="mx-4 text-lg font-sans text-slate-50 relative hover:text-white hover:after:content[''] hover:after:w-full hover:after:h-0.5 hover:after:bg-white hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:rounded-md  hover:after:transition-all capitalize" href={link}>{text}</a>)
}