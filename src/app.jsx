import React from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'


class App extends React.Component{
	render(){
		return(
			<>
				<Navbar/>
				<Hero />
			</>
		)
	}
}

export default App