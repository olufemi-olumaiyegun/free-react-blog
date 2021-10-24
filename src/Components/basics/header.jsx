import React from 'react';
import {Helmet} from 'react-helmet';
import '../../Assets/basics/css/header.css';

export default class Header1 extends React.Component{
  render (){
  return (


      
    <React.Fragment>
    <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
          <title>HEYFEMI</title>
      </Helmet>

  
 
    <div className="container headerContainer">

        <nav className="topHeader row ">

            <div className="col col-md-5 col-sm-5 iconCol">
                <i className="fab fa-linkedin Xicons" ></i>
                <i className="fab fa-github Xicons"></i>
                <i className="fab fa-twitter Xicons"></i>



            </div>
            <div className="col col-md-2 col-sm-12 blogTitle">
                <h2 className = "titleHeader">
                    HEYFEMI
                </h2>

            </div>
            <div className="col col-md-5 col-sm-12 searchCol">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>            
            </div>

        </nav>
    </div>
    <hr className=" headerLine"/>

         
    </React.Fragment>


  );
}

}