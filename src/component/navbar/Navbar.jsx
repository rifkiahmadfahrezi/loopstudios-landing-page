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
			if(window.scrollY > 0){
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
			<nav className={`w-screen py-6 px-3 fixed transition duration-500 ${this.state.isOnScroll ? `bg-black` : null}`}>
				<div className="container mx-auto flex items-center justify-between px-4">
					<NavbarLogo/>
					<NavbarMenu/>
				</div>
			</nav>
		)
	}
}