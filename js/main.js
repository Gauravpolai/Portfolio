const navmenu= document.getElementById('nav-menu'),
        navtoggle=document.getElementById('nav-toggle'),
        navclose=document.getElementById('nav-close')
    //NAVMENU
        if(navtoggle){
            navtoggle.addEventListener('click',() =>{       //on click the funciton is invoked
                navmenu.classList.add('show-menu')          ///adds a class show-menu to the element..........classList returns the CSS classnames of an elment
            })

        }
    //NAVCLOSE      
        if(navclose)
        {
            navclose.addEventListener('click',()=>{
                navmenu.classList.remove('show-menu')
            })
        }

    //MENU CLOSE ON CLICKING LINKS
    const navlink=document.querySelectorAll('.nav_link')        //return nodelist whereas getelement returns HTMLdoc

    
    function hi()
    {
        // const navmenu= document.getElementById('nav-menu')
        
        navmenu.classList.remove('show-menu')
        
    }
    
    navlink.forEach(n =>n.addEventListener('click',hi))