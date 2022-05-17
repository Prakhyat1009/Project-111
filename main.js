//https://teachablemachine.withgoogle.com/models/g96mq9aWu/
camera = document.getElementById("camera");

Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:100,
crop_width:350,
crop_height:250
});

Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='snapshot'>";
})
}

console.log( "Ml5 version- ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g96mq9aWu/model.json",modelloaded);

function modelloaded(){
console.log("Model loaded");
}

function speak(){
var synth = window.speechSynthesis;
prediction_1="The first prediction is " + results[0].label;
prediction_2="And the second prdiction is " + results[1].label;
repeated_text= new SpeechSynthesisUtterance(prediction_1 + prediction_2);
synth.speak(repeated_text);
}