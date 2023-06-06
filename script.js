

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

// window.onload = () => {
//     let images = document.querySelectorAll("img");

//     for( let image of images ) {
//         if( !image.classList.contains(".important")) {
//             image.style.display = "none";
//             // console.log(image + "this one")
//         }
//     }
// }

// window.onload = () => {
//     let paragraphes = document.querySelectorAll("p");

//     for( let paragraph of paragraphes ) {
//         console.log(paragraph);
//     }
// }
let colorsArr = [];

window.onload = () => {
    let paragraphs = document.querySelectorAll("p");

    let randomiseColor = () => {

        for(let paragraph of paragraphs ) {

            let r = Math.floor(Math.random() *256 );
            let g = Math.floor(Math.random() *256 );
            let b = Math.floor(Math.random() *256 );

            let randomColor = `rgb(${r}, ${g}, ${b})`;

                if(!colorsArr.includes( randomColor ) && paragraphs.length != randomColor.length ) {
                    colorsArr.push( randomColor );
                    console.log( colorsArr );

                } else {
                    randomiseColor();

                };

                if( colorsArr.length === paragraphs.length ) {
                    
                    for( let i = 0; i < paragraphs.length; i++ ) {
                        
                        if(paragraphs[ i ].classList.length === 0 ) {
                            paragraphs[ i ].style.color = colorsArr[ i ];
                        } 
                    };
                };
          
        };
    };

    
    console.log(randomiseColor());
}

  // if(colorsArr.length === paragraphs.length) {
                    //     for(let i = 0; i <= paragraphs.length; i++ ) {
                    //         paragraphs[ i ].style.color = colorsArr[ i ];
                    //     }

    // colorsArr.forEach(element => {
    //     if(element
    // });

    

    // let randomiseAllParagColor = () => {
        
    //     if()
    // }

    // for( let paragraph of paragraphes ) {
    //     for(let i = 0; i <= paragraphes.length; i++ ) {
    //         let c = randomiseColor()    
            
            



    //          paragraphes[ i ].style.color = c
            
    //     }

    // }
        // let randomColor = "rgb(" + r + "," + g + "," + b + ");"
        
        
        // paragraph.style.color = randomiseColor();
        
        //if the parag[i] === rgb XXX and paraga[i + 1]
        
            //change randomly color of paragraphes 







    // };

    



