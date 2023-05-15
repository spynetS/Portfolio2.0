// scroll spy
document.addEventListener("scroll", e=>{
    var b = Math.round((window.scrollY) / window.screen.height*1.2)
    setActive(b)
})


function setActive(id){
    console.log(id)
    let idn = id;
    
    if(typeof(id) != 'string'){
        console.log(id)
        switch(id){
            case 0:
                idn = "ahome";
                break;
            case 1:
                idn = "aabout";
                break;
            case 2:
                idn = "askills";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                idn = "ajava";
                break;
            case 8:
                idn = "acontact";
                break;
        }
    }

    document.getElementById("ahome").className =      "navtitle"
    document.getElementById("aabout").className =     "navtitle"
    document.getElementById("askills").className =    "navtitle"
    document.getElementById("ajava").className =      "navtitle"
    document.getElementById("acontact").className =   "navtitle"
    document.getElementById("ahome").className =       "navtitle"

    document.getElementById("home").className =      "invis"
    document.getElementById("about").className =     "invis"
    document.getElementById("skills").className =    "invis"
    document.getElementById("java").className =      "invis"
    document.getElementById("contact").className =   "invis"
    document.getElementById("home").className =      "invis"
    
    
    document.getElementById(idn.substring(1)).className = "fadein-1"
    document.getElementById(idn).className = "navtitle selectedtitle"
}
