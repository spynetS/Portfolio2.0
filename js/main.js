// scroll spy
document.addEventListener("scroll", e=>{
    var b = Math.round((window.scrollY) / window.screen.height * 1.2)
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
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                idn = "areact";
                break;
            default:
                idn = "acontact";
                break;
        }
    }

    document.getElementById("ahome").className =      "navtitle"
    document.getElementById("aabout").className =     "navtitle"
    document.getElementById("askills").className =    "navtitle"
    document.getElementById("areact").className =      "navtitle"
    document.getElementById("acontact").className =   "navtitle"
    document.getElementById("ahome").className =       "navtitle"

    document.getElementById("home").className =      "fadeout-1 invis"
    document.getElementById("about").className =     "fadeout-1 invis"
    document.getElementById("skills").className =    "fadeout-1 invis"
    document.getElementById("react").className =     "fadeout-1 invis"
    document.getElementById("contact").className =   "fadeout-1 invis"
    document.getElementById("home").className =      "fadeout-1 invis"


    document.getElementById(idn.substring(1)).className = "fadein-1"
    document.getElementById(idn).className = "navtitle selectedtitle"


}
