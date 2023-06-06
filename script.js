

// title :This is an important item
//add attr title to all tags with .important
//selectorAll creates an array VERY IMPORTANT!!!!!!!!!!!!!!!!!!!


//Solution 1
// window.onload = () => {
//     let addAttr = document.querySelectorAll(".important");
//     addAttr.forEach(element => {
//         element.setAttribute("title","This is an important item.");
//     })
// }


//Solution 2
// window.onload = () => {
//     let addAttr = document.querySelectorAll(".important");
//     for(let i = 0; i < addAttr.length; i++ ) {
//         addAttr[ i ].setAttribute("title","This is an important item.");
//     };
// };

window.onload = () => {
    let images = document.querySelectorAll("img");

    for( let image of images ) {
        if( !image.classList.contains(".important")) {
            image.style.display = "none";
            // console.log(image + "this one")
        }
    }
}



