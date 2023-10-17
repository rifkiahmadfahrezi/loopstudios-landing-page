import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import About from './component/about/About'
import Creations from './component/creations/Creations'
import Footer from './component/footer/Footer'


class App extends React.Component{
	render(){
		return(
			<>
				<Navbar/>
				<Hero/>

				<About />
				<Creations />

				<Footer />
			</>
		)
	}
}

export default App