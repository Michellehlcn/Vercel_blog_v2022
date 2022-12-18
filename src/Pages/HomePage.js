import React from 'react'
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
					<h1 className="hero-text">
							
							{""}
							
									{""}
									<Typical
									loop={Infinity}
									steps={[
										">cd Michellehlcn _ ",
										1000,
										]}/>
				</h1>

				<p className="h-sub-text">
				Hello, My name's Michelle. A freelancer based in Sydney. 
				I'm currently working on projects domain in Back-end development, Data Analyst.{' '}
				<a style={{ color: "#0381ff38" }} target="_blank">See more about me.</a></p>

				<div className="icons">

					<Link to={{ pathname:"https://michellehlcn.wordpress.com"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faWordpress} className="icon fb" />
					</Link>
						<Link to={{ pathname:"https://github.com/Michellehlcn"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
						<Link to={{ pathname:"https://www.linkedin.com/in/huu-linh-chi-nguyen/"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} className="icon yt" />
					</Link>
					
					<Link to={{ pathname:"https://twitter.com/Chisoulofmusic"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faTwitter} className="icon tt" />
					</Link>
				</div>

			</header>
		</div>


	);
}

export default HomePage;