import React from 'react';
import '../../Assets/basics/css/main-masonry.css';

import dogPic from "../../Assets/basics/images/dog-4977599_1920.jpg";
import robotHandPic from "../../Assets/basics/images/possessed-photography-jIBMSMs4_kA-unsplash.jpeg";
import laptopPic from "../../Assets/basics/images/laptop-1512838_1280.png";
import abstractPic from "../../Assets/basics/images/abstract-5035778_1920.jpeg";
import alesPic from "../../Assets/basics/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpeg";
import alexPic from "../../Assets/basics/images/alex-knight-2EJCSULRwC8-unsplash.jpeg";
import andrasPic from "../../Assets/basics/images/andras-vas-Bd7gNnWJBkU-unsplash.jpeg";
import backgroundPic from "../../Assets/basics/images/background-2426328_1920.jpeg";
import computerPic from "../../Assets/basics/images/computer-4795762_1920.jpeg";
import cubePic from "../../Assets/basics/images/cubes-2492010_1920.jpeg";
import lightBulbPic from "../../Assets/basics/images/light-bulb-3104355_1920.jpeg";
import lorenzoPic from "../../Assets/basics/images/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpeg";
import modernPic from "../../Assets/basics/images/modern-2086454_1280.png";



let pics = [dogPic, robotHandPic, laptopPic, abstractPic, alesPic, 
    alexPic, andrasPic, backgroundPic, computerPic, cubePic, lightBulbPic, lorenzoPic, modernPic] //array of random pictures

export default class Card extends React.Component{

    render (){
        this.pic = pics[Math.floor(Math.random() * pics.length)]; //get random picture 

        return (
            <React.Fragment>
 <div className="box">

            <img src= {this.pic}/>
            <p className="date"> 
               {this.props.author}| {this.props.date}

            </p>
            <h2>
              
              {this.props.title}
            </h2>
            <p>
                &ldquo; {this.props.snippet} &rdquo;
            </p>
            <button type="button" className="btn btn-success cardBtn"><p>
            {this.props.category}
                                                    </p>
                                                </button>
           

        </div>

            </React.Fragment>
           


        );
    }
}