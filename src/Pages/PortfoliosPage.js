import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';
import RepoCard from "react-repo-card";
import { Container,Row,Col } from 'react-bootstrap';


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>

            
            <div className="portfolios-repo">
            <Container fluid>
            	<div className="repo-title">


	           <h4 className="about-text">Webscraping, Web/Application Development, Miscellaneous Packages</h4>
	           <p className="about-text">A glimpse of the projects I've been working on</p>
	          	</div>
				<Row>
				    <Col auto>
				      	<div style={{ width: "405px", padding: 10}}>
		      				<RepoCard username="Michellehlcn" repository="VietnamCovid19Dataset" />
		    			</div>
				    </Col>
				    <Col auto>
					    <div style={{ width: "405px", padding: 10 }}>
			      			<RepoCard username="Michellehlcn" repository="Autoscraper" />
			    		</div>
			    	</Col>
			
					<Col auto>
					    <div style={{ width: "405px", padding: 10 }}>
		      				<RepoCard username="Michellehlcn" repository="Arbitrage-binance" />
		    			</div>
				    </Col>
					<Col auto>
					    <div style={{ width: "405px" , padding: 10}}>
		      				<RepoCard username="Michellehlcn" repository="Horseracing" />
		    			</div>	
				    </Col>
					<Col auto>
					    <div style={{ width: "405px" , padding: 10}}>
		      				<RepoCard username="Michellehlcn" repository="StockTradingApp" />
		    			</div>	
				    </Col>
					<Col auto>
					    <div style={{ width: "405px" , padding: 10}}>
		      				<RepoCard username="Michellehlcn" repository="Hompage" />
		    			</div>	
				    </Col>				    
				</Row>
			</Container>	
    		</div>


            <div className="portfolios-data">
           		<h4 className="about-text">Data Visualization, Map and Navigation</h4>
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />

            </div>

        </div>
    )
}

export default PortfoliosPage;
