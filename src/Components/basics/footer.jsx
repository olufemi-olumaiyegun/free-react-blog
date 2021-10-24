import React from 'react';

import {Helmet} from 'react-helmet';
import "../../Assets/basics/css/footer.css";

export default class SimpleFooter extends React.Component{

    render (){
        return(
            <React.Fragment className="footerFrag">

        
                <Helmet>
                    
                            <meta charset="utf-8"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet"/>

                            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet"/>

                            <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600&display=swap" rel="stylesheet"/>

                            <link rel="stylesheet" href="fonts/icomoon/style.css"/>

                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />



                           
                        

                </Helmet>
        

                <footer className="footer-59391">
                
                    <div className="container">

                    
                    <div className="row mb-5">
                        <div className="col-md-4 col-sm-6 site-logo-wrapper">
                        <div className="site-logo">
                            <a href="#">H👋🏿EYFEMI</a>
                        </div>
                        </div>
                        <div className="col-md-8 text-md-right col-sm-12 social-icons-wrapper">
                        <ul className="list-unstyled social-icons">
                            <li> 
                                <a href="#" className="gt"><span className="fab fa-github"></span></a>
                            </li>
                            <li> 
                                <a href="#" className="in"><span className="fab fa-linkedin"></span></a>
                            </li>
                            <li> 
                                <a href="#" className="tw"><span className="fab fa-twitter"></span></a>
                            </li>

                                
       
                        </ul>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6 col-sm-6 input-group-wrapper">
                            <div class="input-group">
                                <div class="form-outline">
                                    <input type="search" id="form1" class="form-control" placeholder="Search"/>
                                </div>
                                <button type="button" class="btn btn-warning">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        
                            
                        </div>
                        <div className="col-md-6 text-md-right col-sm-12 footer-nav-wrapper">
                        <ul className="nav-links list-unstyled nav-right">
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">FPL Tool</a></li>
                            <li><a href="#">WayBack-Machine</a></li>
                            
                        </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                        <div className="copyright">
                            <p><small>Copyright 2021. All Rights Reserved.</small></p>
                        </div>
                        </div>
                    </div>
                    
                </div>
                </footer>
            </React.Fragment>
        );
    }
}