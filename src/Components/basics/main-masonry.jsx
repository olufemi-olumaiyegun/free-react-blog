import React from 'react';
import '../../Assets/basics/css/main-masonry.css';
import chrisPic from "../../Assets/basics/images/christopher-gower-_aXa21cf7rY-unsplash.jpg";
import  leftPic from "../../Assets/basics/images/chris-ried-ieic5Tq8YMk-unsplash.jpg"
import bottomRightPic from "../../Assets/basics/images/john-schaidler-9V3Q2W_mRLE-unsplash.jpg"
import Card from './main-cards'




export default class Masonry extends React.Component{

    render (){
        let cards = [{
            img: {chrisPic},

                author:'John Doe',
                date: 'December 29, 2017',
              
               title:'Having Troubles With A Slow Website?',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'Web Development',
            },
            
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'Let\'s Code JS?',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'JavaScript',

            },
            
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'Git Is The Most Impactful Tool I\'ve Come Across',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidn culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'DevOps',

            },
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'Why All Beginners Need To Learn Bootstrap',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'Web Development',

            },
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'A story about Pandas',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                category: 'Python'

            },
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'How To Be A Perfect Intern',
                snippet:"ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'Lifestyle',

            },
            {


                author:'John Doe',
                date: 'December 39, 2017',
              img: {leftPic},
               title:'Imposter Syndrome May Not Really Be A Bad Thing',
                snippet:"ldquo; Lorem ipsum dolor sit amet, . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&rdquo",
                category: 'Lifestyle',

            }
        ]
        return (
            <div className="masonry-container">
                {cards.map((card,index)=>{
                    return <Card img={card.img} author={card.author} title={card.title} category={card.category} snippet={card.snippet} date={card.date} />
                })}
            </div>
            
               
            

        );
    }
}
    