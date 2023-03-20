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
    
        navlink.forEach((n) =>                      //for each maybe works only for query selector i.e for nodelists only
        {n.addEventListener('click',hi)})


       
        
// skills
    const skillscontent= document.getElementsByClassName('skills_content'),
        skillsheader= document.querySelectorAll('.skills_header')

    function toggleskills(){
        let itemclass= this.parentNode.className        //skillsheader ka parent class name ig i.e .skills_content skills_close
        console.log(itemclass)                      //skills_content skills_close
    //    for(i=0; i<skillscontent.length; i++)
    //    {
    //     skillscontent[i].className='skills_content skills_close'
    //    }
        if(itemclass ==='skills_content skills_close'){
            this.parentNode.className= 'skills_content skills_open'
        }
        else 
        if(itemclass === 'skills_content skills_open'){
            this.parentNode.className='skills_content skills_close'
        }
    }

    skillsheader.forEach((el) =>{
        el.addEventListener('click', toggleskills)
    })


    