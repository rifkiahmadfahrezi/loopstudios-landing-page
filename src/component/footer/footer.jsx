import React from 'react'
import NavbarLogo from '../navbar/NavbarLogo'
import FooterLink from './FooterLink'

export default function Footer(){

	const icons = ["facebook", "twitter", "pinterest", "instagram"]

	return (
		<footer className="bg-black w-full mt-[100px] bottom-0 mb-0 min-h-[250px] py-5">
			<div className="container w-[90%] md:w-[95%] flex flex-col lg:flex-row mx-5 items-center lg:justify-between sm:mx-auto">
				<div className="flex flex-col my-5">
					<img src="./images/logo.svg" className="max-w-[150px]" alt="footer logo"/>
					<div className="flex flex-col lg:flex-row md:flex-row items-center mt-6 ml-[-10px]">
						<FooterLink link="#about" text="about"/>
						<FooterLink link="#" text="Careers"/>
						<FooterLink link="#" text="Events"/>
						<FooterLink link="#" text="Products"/>
						<FooterLink link="#" text="Support"/>
					</div>
				</div>

				<div className="flex flex-col my-5">

					<div className="flex justify-center lg:justify-end">
						{icons.map((icon, i) =><a key={i} className="cursor-pointer mx-3"  href="#"><img  src={`./images/icon-${icon}.svg`} alt={`icon ${icon}`}/></a>)}
					</div>
					<div className="mt-6">
						<small className="text-slate-400">&copy; 2023 Loopstudios. All rights reseverd</small>
					</div>
				</div>
			</div>
		</footer>
	)
}