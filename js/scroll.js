var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var h2 = h/3*2;
var nav =  document.getElementsByTagName("nav")[0];
// console.log(nav);
var header = document.getElementById("video");
var blog = document.getElementById("blog");
var tours_grid = document.getElementById("tours_grid");
var tours_container = document.getElementById("tours_container");
var contact = document.getElementById("contact");
var tours_grid_scroll = 0;

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;  
    // this.console.log(scrollpos);  
    
    // if (scrollpos >= (h-125))
    // { 
    //     nav.classList.add("bg-dark");
    // }
    // else 
    // { 
    //     nav.classList.remove("bg-dark");
    // }

    // v_header = scrollpos/1.5 + "px";
    // console.log(v_header);

    // header.style.top =  scrollpos/4 + "px";

    // if(scrollpos >= 650)
    // {
    //     blog.style.backgroundPositionY = -(scrollpos - 600)/6 + "px";
    // }

    
    
    //FIXED TOURS
    if (window.scrollY > (blog.offsetTop + blog.offsetHeight)) {
        // console.log("You've scrolled past the blog");
        tours_grid.classList.add("c-tours__grid--fixed");
        tours_container.classList.add("c-tours__container--fixed");
        
    }

    if (window.scrollY < (blog.offsetTop + blog.offsetHeight)) {
        // console.log("You've scrolled before the blog");
        tours_grid.classList.remove("c-tours__grid--fixed");
        tours_container.classList.remove("c-tours__container--fixed");
    }

    // //tours_container
    // if (visibleElement(contact)) {
    //     console.log("tours_grid_scroll: " + tours_grid_scroll);
        
    //     tours_grid_scroll -= 0.75;
    //     console.log(tours_grid_scroll);
    //     tours_grid.style.top = tours_grid_scroll + "px";
    // }
    // else{
    //     console.log("tours_grid_scroll: " + tours_grid_scroll);
    //     tours_grid_scroll = 0;
    //     tours_grid.style.top = 0;
    // }

    
})


function smooth(id)
{
    // console.log(id);
    // var element = document.getElementById(id);
    // console.log(element);
    // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    let yOffset = 0; 
    let element = document.getElementById(id);
    let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function visibleElement(el){
    var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height, 
      el = el.parentNode
    // Check if bottom of the element is off the page
    if (rect.bottom < 0) return false
    // Check its within the document viewport
    if (top > document.documentElement.clientHeight) return false
    do {
      rect = el.getBoundingClientRect()
      if (top <= rect.bottom === false) return false
      // Check if the element is out of view due to a container scrolling
      if ((top + height) <= rect.top) return false
      el = el.parentNode
    } while (el != document.body)
    return true
  };