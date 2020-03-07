const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

const reader = new FileReader();


const img  =  new Image();



const uploadImage= (e)=>{
    reader.onload = () =>{
        img.onload = () =>{
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0,0);
        
        }
        img.src=reader.result;

    }
    reader.readAsDataURL(e.target.files[0]);
    console.log(reader);
}
const imageLoader  = document.getElementById('uploader');

imageLoader.addEventListener('change',uploadImage);