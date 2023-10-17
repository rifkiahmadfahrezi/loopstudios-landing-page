import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'


export default class Navbar extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			isOnScroll: false,
		}

		this.isOnScrollHandler = this.isOnScrollHandler.bind(this)
	}

	isOnScrollHandler(){
		window.addEventListener("scroll", ()=> {
			if(window.scrollY > (window.innerHeight - 100)){
				this.setState({isOnScroll: true})
			}else if(window.scrollY == 0){
				this.setState({isOnScroll: false})
			}else{
				this.setState({isOnScroll: false})
			}
		})
	}

	render(){
		// detect if web is scrolled
		this.isOnScrollHandler()
		return (
			<nav className={`z-[9] w-full py-6 fixed transition duration-500 ${this.state.isOnScroll ? `bg-black` : null}`}>
				<div className="flex container mx-5 sm:mx-auto items-center justify-between px-4">
					<NavbarLogo/>
					<NavbarMenu/>
				</div>
			</nav>
		)
	}
}