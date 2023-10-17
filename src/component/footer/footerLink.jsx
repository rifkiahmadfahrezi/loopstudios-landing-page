import React from 'react'

export default function FooterLink({link, text}){
	return (<a className="font-alata text-md my-3 capitalize mx-4 font-sans text-slate-200 relative hover:text-white hover:font-semibold after:content[''] after:scale-0 after:w-6/12 hover:after:scale-100 hover:after:h-0.5 hover:after:bg-white hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:rounded-md transition hover:after:duration-500 hover:after:origin-bottom-left md:hover:after:origin-center font-normal ease-in-out hover:after:left-[50%] hover:after:translate-x-[-50%]" href={link}>{text}</a>)
}