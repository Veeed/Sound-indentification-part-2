function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        R = Math.floor(Math.random() * 255) + 1;
        G = Math.floor(Math.random() * 255) + 1;
        B = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -" + result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy is -" + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";

        img_1 = document.getElementById("alien1");
        img_2 = document.getElementById("alien2");
        img_3 = document.getElementById("alien3");
        img_4 = document.getElementById("alien4");
        if(result[0].label=="Clap"){
            img_1.src = "aliens-01.gif";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.png";
        }
        else if(result[0].label=="Snapping"){
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.gif";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.png";
        }
        else if(result[0].label=="Bell"){
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.gif";
            img_4.src = "aliens-04.png";
        }
        else {
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.gif";
        }
        
            
        

    }
}
