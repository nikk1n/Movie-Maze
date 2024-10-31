const theme=localStorage.getItem('dark')||'off';
const new_stylesheet=document.createElement('link');
new_stylesheet.rel="stylesheet";
new_stylesheet.id="style";
let fetchStyle=function(){
    if (theme === 'on') {
        new_stylesheet.href = "stylesheets/Dark.css";
    } else {
        new_stylesheet.href = "stylesheets/Light.css";
    }
    document.head.appendChild(new_stylesheet);
}
fetchStyle();