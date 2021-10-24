import React from 'react';
import {Helmet} from 'react-helmet';
import '../../Assets/basics/css/navbar.css';



export default class NavBar extends React.Component{
    render (){
        return (
                
            <React.Fragment>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

                </Helmet>

  
                <div className="container container-fluid navContainer">

                <div className="listRow">
                    <ul className="list">
                        <li className="listRowItem">
                            About Me
                        </li>
                        <li className="listRowItem">
                            FPL TOOL
                        </li>
                        <li className="listRowItem">
                        <p>
                            WAYBACK MACHINE
                        </p> 
                        </li>
                        
                        <li className="listRowItem ">
                            

                              <div className="sub-menu">                      
                              
                                <p>
                                CATEGORIES <i className="arrow down"></i>

                                </p>

                                <div className="sub-menu-content">

                                
                                        <a href="#">
                                            Web Development
                                        </a>
                                    
                                        <a href="#">
                                            DevOps
                                        </a>

                                        <a href="#">
                                            Python
                                        </a>
                                        <a href="#">
                                            Javascript
                                        </a>
                                        <a href="#">
                                            Git
                                        </a>

                                </div>
                            </div>
                        </li>

                    </ul>



                </div>
            </div>
            </React.Fragment>
        );
    }
}