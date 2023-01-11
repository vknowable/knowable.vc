/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    /*
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    */

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.body.querySelector('#navbarResponsive');
    navbarToggler.addEventListener('click', () => {
      responsiveNavItems.classList.toggle('navbarResponsive-hide')
    })

    //const helpfulItems = [].slice.call(document.querySelectorAll('.helpful-rect'));


/*
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
*/


    //popup bios
    let bioShow = false;
    document.addEventListener('click', function(e) {
      if (bioShow === true) {
        const bios = Array.from(document.getElementsByClassName("Tooltip-Tip"));
        bios.forEach(bio => {
          bio.classList.add('tooltip-hide');
        })
        //document.getElementById("blur").classList.remove('show');
        bioShow = false;
      }
      else {
        const clicked = e.target.id.split("-");
        if(clicked[1] === 'pic') {
          //document.getElementById("blur").classList.add("show");
          document.getElementById(clicked[0] + "-bio").classList.toggle("tooltip-hide");
          bioShow = true;
        }
      }
    }, false);

});
