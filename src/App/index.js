import React, { useEffect  } from 'react';

import '../assets/css/scss/index.scss';
import './App.scss';

import LocomotiveScroll from 'locomotive-scroll';

import Header from './../components/Header';
import FrontPage from './../pages/FrontPage';

const App = () => {

	useEffect(()=>{
		const scroll = new LocomotiveScroll({
			el: document.querySelector('.App'),
			smooth: true
		});
	},[]);

	return (
		<main className="App" >
			<Header />
			<FrontPage />
		</main>
	);

}

export default App;
