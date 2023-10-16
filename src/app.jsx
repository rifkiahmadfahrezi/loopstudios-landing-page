import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import About from './component/about/About'


class App extends React.Component{
	render(){
		return(
			<>
				<Navbar/>
				<Hero/>

				<About />
			</>
		)
	}
}

export default App