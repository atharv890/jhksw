prediction1="";
Webcam.set({
height:300,
width:300,
image_format:"png",
png_quality:100,
dest_height:300,
dest_width:275
});
Webcam.attach("#camera");

function submit(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
});}
console.log("ml5.version",ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8KhDWrj60/model.json",modelloaded);
function modelloaded(){
audio=new Audio("Welcome.ogg");
audio.play();
console.log(modelloaded);
}
function yo(){
synth=window.speechSynthesis;
synth1="First prediction is"+prediction1;
synth3= new SpeechSynthesisUtterance(synth1);
synth.speak(synth3);
}
function result(){
picture=document.getElementById("image");
classify.classify(picture,bye)
}
function bye(error,results){
if (error){
console.log(error);
}
else{
console.log(results);
document.getElementById("result_label").innerHTML=results[0].label;
prediction1=results[0].label;
yo();
if (results=="Best"){
document.getElementById=("results_label").innerHTML="&#128077"
}
if (results=="Victory"){
document.getElementById=("results_label").innerHTML="&#9996"
}
if (results=="Amazing"){
document.getElementById=("results_label").innerHTML="&#128076;"
}






}
}