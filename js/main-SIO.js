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


// Services
const modalviews= document.querySelectorAll('.services_modal'),
    modalbtn= document.querySelectorAll('.services_button'),
    modalcloses=document.querySelectorAll('.services_modal-close')

    let modal= function(modalclick){
        console.log(modalclick)
        modalviews[modalclick].classList.add('active-modal')
    }

    modalbtn.forEach((modalbtn,i)=>{
    modalbtn.addEventListener('click',()=>{
        modal(i)
        console.log(i)
        })
    })

    modalcloses.forEach((modalclos)=>{
        modalclos.addEventListener('click', ()=>{
            modalviews.forEach((modalview) =>{
                modalview.classList.remove('active-modal')
            })
        })
    })
    // if(modalcloses)
    // {
    //     modalcloses.addEventListener('click',()=>{
    //         modalviews.classList.remove('active-modal')
    //     })
    // }

    function scrollheader(){
        const nav= document.getElementById('header')
        if(this.scrollY >= 350)
        nav.classList.add('scroll-header');
        else
        nav.classList.remove('scroll-header')
    }

    window.addEventListener('scroll', scrollheader)
    

    function scrolltop(){
        const scrolltop= document.getElementById('scroll-up');
        if(this.scrollY >= 80)
        scrolltop.classList.add('show-scroll');
        else
        scrolltop.classList.remove('show-scroll')
    }

    window.addEventListener('scroll', scrolltop)

    const themebutton= document.getElementById('theme-button')
    const darktheme= 'dark-theme'
    const icontheme= 'uil-sun'

    const selectedtheme= localStorage.getItem('selected-theme')     //light
    const selectedIcon= localStorage.getItem('selected-icon')   //moon

    const getcurrenttheme= ()=> document.body.classList.contains(darktheme) ? 'dark' : 'light'
    const getcurrenticon= ()=> themebutton.classList.contains(icontheme) ? 'uil-moon' : 'uil-sun'

    if(selectedtheme)
    {
        document.body.classList[selectedtheme === 'dark' ? 'add' :'remove'](darktheme)
        themebutton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'] (icontheme)
    }
    
    themebutton.addEventListener('click', ()=>{
        document.body.classList.toggle(darktheme)
        themebutton.classList.toggle(icontheme)   
        localStorage.setItem('selected-theme', getcurrenttheme())
        localStorage.setItem('selected-icon',getcurrenticon())
    })