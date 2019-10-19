import React, { useEffect  } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../assets/css/scss/index.scss';

import locomotiveScroll from "locomotive-scroll";

import Border from './../components/Border';
import Header from './../components/Header';
import Footer from './../components/Footer';

import FrontPage from './../pages/FrontPage';
import AboutPage from './../pages/AboutPage';

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
			<Border />
			<Header />
				<Switch>
					<Route exact path='/' component={FrontPage} />
					<Route exact path='/a-propos/' component={AboutPage} />
				</Switch>
			<Footer />
		</main>
	);

}

export default App;
