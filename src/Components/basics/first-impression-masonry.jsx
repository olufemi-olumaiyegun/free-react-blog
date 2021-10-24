import React from 'react';
import {Helmet} from 'react-helmet';
import '../../Assets/basics/css/first-impression-masonry.css';
import topRightPic from "../../Assets/basics/images/christopher-gower-_aXa21cf7rY-unsplash.jpg";
import  leftPic from "../../Assets/basics/images/chris-ried-ieic5Tq8YMk-unsplash.jpg"
import bottomRightPic from "../../Assets/basics/images/john-schaidler-9V3Q2W_mRLE-unsplash.jpg"

export default class FirstImpressionMasonry extends React.Component{

    render (){
        return (
            <React.Fragment>

               
                <div className="container container-fluid composedCards">
                
                    <div className="row composedRow">

                        <div className="col  col-md-6  leftCard" >
                        
                                <div className="card" style={{backgroundImage: `url(${leftPic})`,backgroundSize: 'cover',}}>
                                    <button type="button" className="btn btn-warning leftCardBtn"><p>
                                        CATEGORY: PYTHON
                                    </p></button>
                                    <h2 className="leftCardTitle">
                                        <strong>
                                        You Should Learn Python. Here's Why.

                                        </strong>


                                    </h2>

                                  
                                                <i className="postMeta">
                                                    John Doe | December 29, 2017
                                                </i>
                                </div>
                        
                        </div>
                        <div className="col col-md-6 rightCard">
                            <div className="row topRightImgDiv">

                                <div className="right-card">
                                    <figure className="card__thumbnail">
                                        <img src={topRightPic} />
                                        
                                        <span className="card__title">
                                            <button type="button" className="btn btn-dark rightCardBtn"><p>
                                                        DEVOPS
                                                    </p>
                                                </button>
                                                <p className="postTitle">
                                                    CI/CD: A Jenkins Edition
                                                </p>
                                                <i className="postMeta">
                                                    John Doe | December 29, 2017
                                                </i>
                                            </span>
                                    </figure>
                                </div>
                                
                                <div className="right-card">
                                    <figure className="card__thumbnail">
                                        <img src={bottomRightPic}/>
                                        
                                        <span className="card__title">
                                            <button type="button" className="btn btn-dark rightCardBtn"><p>
                                                        JAVASCRIPT
                                                    </p>
                                                </button>
                                                <p className="postTitle">
                                                    Creating My Blog With React
                                                </p>
                                                <i className="postMeta">
                                                    John Doe | December 29, 2017
                                                </i>
                                            </span>
                                    </figure>
                                </div>
                                            
                            </div>
                        </div>
                    </div>

                </div>
             

            </React.Fragment>



  );
}

}