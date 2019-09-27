const images = document.querySelectorAll('img');


//set of parent elements
//contains indentation and threshold
const options = {
    root: null,  //is there an external element;
    
    rootMargin : '0px', 
    threshold :  0.1 
}

// used a function as a handler
    function handleImg( myImg, obsetver) {
        myImg.forEach(myImgSingle => {
            console.log(myImgSingle.intersectionRatio);
            if (myImgSingle.intersectionRatio > 0) {
                loadImage(myImgSingle.target);
            }
        })
    }
   // intersectionRatio at intersection starts the loadImage function
function loadImage(image) {
    image.src = image.getAttribute('data'); //I pull out the date attribute and assign src
}

// track when image falls into view
// special object allows you to track when a certain object falls into the window of visibility on the screen
const obsetver = new IntersectionObserver(handleImg, options); 

// handleImg function gets images
images.forEach( img => {
    obsetver.observe(img);
})