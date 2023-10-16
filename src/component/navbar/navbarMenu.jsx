import React from 'react'
import NavbarMenuItem from './NavbarMenuItem'

export default class NavbarMenu extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			isOpen: false
		}


		this.setIconToggler = this.setIconToggler.bind(this)
	}

	setIconToggler(){
		const menuWrapper = document.querySelector('#menu-wrapper')
		
		if(!this.state.isOpen){
			this.setState({isOpen: true})
		}else{
			this.setState({isOpen: false})
		}

	}


	render(){
		return(
			<>
				{this.state.isOpen == false ? 
					<img className="z-[99] md:hidden cursor-pointer mr-2 " id="menu-toggler" onClick={this.setIconToggler}  src="./images/icon-hamburger.svg" alt="navbar menu toggler"/>
					: 
					<img className="z-[99] md:hidden cursor-pointer mr-2 " id="menu-toggler" onClick={this.setIconToggler}  src="./images/icon-close.svg" alt="navbar menu toggler"/>
				}
				<div id="menu-wrapper" className={`absolute flex flex-col h-screen transition duration-500 ease-in-out inset-0 bg-black ${this.state.isOpen ? `translate-y-[0]` : `translate-y-[-100%]`}  md:static md:translate-y-[0] z-10 md:top-0 md:h-fit align-center md:flex-row  justify-center md:bg-transparent`} >
					<NavbarMenuItem link="#" text="About"/>
					<NavbarMenuItem link="#" text="Careers"/>
					<NavbarMenuItem link="#" text="Events"/>
					<NavbarMenuItem link="#" text="Products"/>
					<NavbarMenuItem link="#" text="Support"/>
				</div>
			</>
		)
	}
}