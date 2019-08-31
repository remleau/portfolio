import React, { useEffect  } from 'react';

import '../assets/css/scss/index.scss';
import './App.scss';

import locomotiveScroll from "locomotive-scroll";

import Header from './../components/Header';
import Footer from './../components/Footer';

import FrontPage from './../pages/FrontPage';

const App = () => {

	const scrollRef = React.createRef();

	useEffect(() => {

		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true
		});

	});

	return (
		<main className="App" ref={scrollRef}>
			<Header />
			<FrontPage />
			<Footer />
		</main>
	);

}

export default App;
