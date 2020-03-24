import React, { useEffect  } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import '../assets/css/scss/index.scss';

import locomotiveScroll from "locomotive-scroll";

import Border from './../components/Border';
import Header from './../components/Header';
import Footer from './../components/Footer';

import FrontPage from './../pages/FrontPage';
import AboutPage from './../pages/AboutPage';
import ProjectPage from './../pages/ProjectPage';

const App = () => { 

	const { pathname } = useLocation();
	const scrollRef = React.createRef();

	useEffect(() => {
	// 	let scroll = new locomotiveScroll({
	// 		el: scrollRef.current,
	// 		smooth: true
	// 	});
	// 	setTimeout(() => { scroll.update();	}, 100);
	// 	return () => {
	// 		if (scroll) scroll.destroy();
	// 	}
	}, [pathname]);

	return (
		<main className="App" data-scroll-section ref={scrollRef}>
			<Border />
			<Header />
				<Switch>
					<Route exact path='/' component={FrontPage} />
					<Route exact path='/a-propos/' component={AboutPage} />
					<Route exact path='/projets/' component={ProjectPage} />
				</Switch>
			<Footer />
		</main>
	);

}

export default App;
