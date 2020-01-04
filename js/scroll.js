var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var h2 = h/3*2;
var nav =  document.getElementsByTagName("nav")[0];
// console.log(nav);

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;  
    // this.console.log(scrollpos);  
    
    if (scrollpos >= (h-125))
    { 
        nav.classList.add("bg-dark");
    }
    else 
    { 
        nav.classList.remove("bg-dark");
    }
})

function smooth(id)
{
    // console.log(id);
    // var element = document.getElementById(id);
    // console.log(element);
    // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    let yOffset = -80; 
    let element = document.getElementById(id);
    let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}
