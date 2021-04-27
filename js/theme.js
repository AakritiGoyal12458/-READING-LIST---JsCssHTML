let darkThemeURL = "https://bootswatch.com/4/darkly/bootstrap.min.css"
let lightThemeURL = "https://bootswatch.com/4/minty/bootstrap.min.css"

const linkTag = document.getElementById("dark-theme-style");
const themeToggler = document.getElementById("theme-toggler");

let isDark = false ;


function enableDarkTheme(){

    linkTag.setAttribute("href" , darkThemeURL);
    themeToggler.innerText = "🌞";
}

 function enableLightTheme(){

    linkTag.setAttribute("href" , lightThemeURL);
    themeToggler.innerText = "🌙";
}
function toggleTheme() {

    if(isDark){
   isDark = false;
enableLightTheme()




    }else{
        isDark = true;
        enableDarkTheme()  
    }
}