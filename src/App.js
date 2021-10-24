import './App.css';
import React from 'react'
import NavBar from './Components/basics/navbar'
import FirstImpressionMasonry from './Components/basics/first-impression-masonry'
import Masonry from './Components/basics/main-masonry'
import SimpleFooter from './Components/basics/footer'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './Assets/basics/css/header.css';
import {Helmet} from 'react-helmet';

import { lightTheme, darkTheme } from './Components/dark-mode/theme';
import { GlobalStyles } from './Components/dark-mode/utilities';




function App() {

    /* * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * *DARK MODE ******/
    const [theme, setTheme] = useState('light');
    // The function that toggles between themes
    const toggleTheme = () => {
      // if the theme is not light, then set it to dark
      if (theme === 'light') {
        setTheme('dark');
      // otherwise, it should be light
      } else {
        setTheme('light');
      }
    }
    return (

    
    <React.Fragment>


            
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
                        <input type="checkbox" onClick={toggleTheme}/>
                        <span class="slider round"></span>
                    </label>            
                </div>

            </nav>
        </div>
        <hr className=" headerLine"/>

            
      </React.Fragment>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        
        <div className="container container-fluid">

          <NavBar />
          <FirstImpressionMasonry />
          <GlobalStyles />

          <Masonry />
          <div className="divSeparator">
            <p>
              s
            </p>
          </div>
          <SimpleFooter />
        
        </div>

      </ThemeProvider>

    </React.Fragment>
   


  );
}

export default App;
