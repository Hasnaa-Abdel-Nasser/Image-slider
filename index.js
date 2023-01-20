document.body.style.cssText='margin:0;';

let container = document.getElementById('container');
container.style.cssText=` height: 100vh;    
                          background-color: rgb(207, 207, 255);
                          display: flex;
                          justify-content: center;
                          align-items: center;`;

var active = -1;
let images = ['image/1.jpeg','image/2.jpeg','image/3.jpeg','image/4.jpeg','image/5.jpeg','image/6.jpeg','image/7.jpeg','image/8.jpeg'];

function insertImages(){
    let htmlCode = ``;
    for(let i=0; i<images.length; i++){
        htmlCode += `<div id = 'img${i}' class= 'images' onmouseover= "hover(${i})"></div>`;
    }
    container.innerHTML+=htmlCode;
}
insertImages();

function imagesStyle(){
    let Div;
    for(let i=0; i<images.length; i++){
        Div = document.getElementById(`img${i}`);
        Div.style.cssText = `background: url(${images[i]}) no-repeat center;
                             background-size: cover;
                             width: 5%;
                             height: 90vh;
                             border-radius: 20px;
                             margin-left: 10px;
                             cursor: pointer;
                             transition: 1s; 
                             `;
    }
}
imagesStyle();

function hover(i){
    if(active != -1){
        let lastDiv = document.getElementById(`img${active}`);
        lastDiv.style.width = `5%`;
    }
    active = i; 
    let Div = document.getElementById(`img${i}`);
    Div.style.width = `50%`;
}
