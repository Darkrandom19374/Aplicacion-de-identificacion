

function Start_clasification(){
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json", modelReady);
 

};

function modelReady() {
    classifier.classify(gotResults)
};

function gotResults(error,results) {
     if (error) {
        console.error(error);
     }
     else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("Result_label").innerHTML = "Escucho " + results[0].label;
        document.getElementById("Result_precition").innerHTML  = "Presicion: " + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("Result_label").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("Result_precition").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")"
        img1 = document.getElementById("Alien1")
        img2 = document.getElementById("Alien2")   
        img3 = document.getElementById("Alien3")   
        img4 = document.getElementById("Alien4")   
           
        if (results[0].label == "aplausos") {
          img1.src = "aliens-01.gif";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";

        }

       else if (results[0].label == "campana") {
          img1.src = "aliens-01.png";
          img2.src = "aliens-02.gif";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";

       }

       else if (results[0].label == "chasquidos") {
         img1.src = "aliens-01.png";
         img2.src = "aliens-02.png";
         img3.src = "aliens-03.gif";
         img4.src = "aliens-04.png";
       
      }

       else {
         img1.src = "aliens-01.png";
         img2.src = "aliens-02.png";
         img3.src = "aliens-03.png";
         img4.src = "aliens-04.gif";

      }
          
      };



};