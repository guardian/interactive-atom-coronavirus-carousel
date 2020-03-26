import templateHTML from "./src/templates/main.html!text"

export async function render() {
    // this function just has to return a string of HTML
    // you can generate this using js, e.g. using Mustache.js

    return '<div id="gd-carousel" style="background-color:white;">&nbsp;</div>';
}


// export async function render() {
//     return templateHTML;
// }

// return '<div id="gd-carousel" class="gd-carousel"> <div class="hideme"></div> </div>'