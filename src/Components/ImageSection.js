import React from 'react';
import { Carousel } from 'react-bootstrap';
import Testmonial from "../Components/testimonial";
import logo1 from '../img/logo.svg';


function ImageSection() {
    return (
        <div className="ImageSection">

            <div className="about-info">
                <p>After having worked in Banking and Finance, Accounting, I'm now working as a data analysis freelancer with a long-term goal towards technical applications in finance.</p>
                <div className="about-text">
                <p>My job consists in helping companies and researchers to analyse their datasets. 
                I am skilled for most steps: data mining, data pre-processing, data visualization and results communication - analysis.
                I'm a passionate programmer. 
                I enjoy all things coding and hope to eventually push the boundaries of the current scope. I currently love using python (flask, django, fastAPI, etc)to create helpful applications. 
                Current focus is the creations of automated solutions for ensuring restructured platforms perform at least an order of magnitude better, going forward. 
                This includes implementation of CI/CD pipelines and overall workflow improvements.
                </p>
                </div>
                <div className="about-text">
                <p>I provide my clients with unlimited support, clear explanations, well-documented code, and actionable insights. 
                I've developed innovative analytical tools and techniques - my own wide range of skillset over years and I believe these various tools will help me accelerate the work, 
                simplify the complex matter and interpret the data in a way everyone can easily understand. Now in turn, let me help your business growth and overcome these hurdles.
                </p>
                </div>
                <div className="about-text">
                    <h1>Q&A Section</h1>
                </div>  
                <div className="about-text">
                    <p>How did you build this site?</p>
                <p>I've gotten asked a few times how I went about building the site. For the front end, I used ReactJS. The backend is using FastAPI.</p>
                </div> 
                <div className="image-data">
                    <img clasName="App-logo" style={{ }}src={logo1} alt=""/>
                 </div> 

                <div className="about-text">
                    <p>How were clients' comments about your services?</p>
                <p>I've received really welcomed and nice compliments about my works, and these really gave me great encouragement to continue and improve myself in this field. Here are a few examples: </p>
                </div>
                <Testmonial />


                <div className="about-text">
                    <p>Why did you choose to work in IT?</p>
                <p>My background was Finance but what I can say is the life guiding me through. In 2020, I was having an injury and in the middle of Covid-19 pandemic I lost a job, I started to work online which didn't require my physical ability. I've learnt coding and picked up projects since then. </p>
                </div>

                <div className="about-text">
                    <h1>Recently on my blog</h1>
                </div>         
            </div>
        </div>
    )
}

export default ImageSection;
