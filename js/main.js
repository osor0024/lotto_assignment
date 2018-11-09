document.addEventListener("DOMContentLoaded", init);

let url = "http://davidst.edumedia.ca/mad9014/formdata.php";
let pageList = [];
pageList = document.querySelectorAll(".page");
let list = [];



function init() {


    let firstButton = document.getElementById("btnSend");

    firstButton.addEventListener("click", serverData.getJSON);


    document.getElementById("btnBack").addEventListener("click", function () {
        navigate(1);
    });
    firstButton.addEventListener("click", play_audio);
}


function navigate(page) {
    pageList[0].classList.toggle("active");
    pageList[1].classList.toggle("active");
    console.log(pageList);

}

function play_audio() {
    document.getElementById("miaudio").play();
}


let serverData = {
    url: "https://davidst.edumedia.ca/mad9014/nums.php",
    httpRequest: "POST",
    getJSON: function () {

        let digits = document.getElementById("digits");
        let max = document.getElementById("max");


        if (digits.value.length == 0) {
            alert("Please enter the digits you want");
            digits.focus();

            return;

        } else if (max.value.length == 0) {
            alert("Please enter a range");
            max.focus();
            return;
        }

        //console.4log("Student");

        let formdata = new FormData();

        formdata.append("digits", digits.value);
        formdata.append("max", document.getElementById("max").value);

        let customSettings = {
            method: serverData.httpRequest,
            mode: "cors",
            body: formdata
        };

        let request = new Request(serverData.url, customSettings);

        fetch(request)
            .then(function (response) {

                console.log(response);
                return response.json();
            })

            .then(function (data) {

                console.log(data);
                console.log(data.numbers);

                if (data.code == 0) {

                    let ul = document.querySelector(".num_list");
                    ul.innerHTML = "";
                    for (let item in data.numbers) {

                        let li = document.createElement("li");
                        li.innerHTML = data.numbers[item];
                        li.className = "cuadritos";
                        ul.appendChild(li);

                    }

                    navigate(0);

                }

            })
            .catch(function (err) {
                alert("Error: " + err.message);
            });
    }

}


































//function output() {
//  
//    
//    li.append(document.createTextNode(list[i]));
//    document.getElementsByClassName(".num_list").appendChild(li);
//}
/***********************************************************************

                  FUNCIONA PERO NO
***********************************************************************
function output_Num() {
    let list = [];

//    li.className = "cuadritos";
    for (let i = 0; i < document.getElementById("digits").value; i++) {
        list.push(Math.floor(Math.random() * document.getElementById("max").value));
        //        console.log(list);
        list.forEach(function () {
            
            let li = document.createElement("li");
            li.className = "cuadritos";
            li.appendChild(document.createTextNode(list[i]));
            let ul = document.getElementById("num_list");
            ul.appendChild(li);
        })
    };
    //        li.appendChild(document.createTextNode(list[i]));
    //  let ul = document.getElementById("num_list");


    console.log(list);
}



***********************************************************************/



// let mypromise = new Promise(() => {
//        
//        let list = [];
//
//        for (let i = 0; i < document.getElementById("digits").value; i++) {
//            list.push(Math.floor(Math.random() * document.getElementById("max").value));
//        }
//    });
//
//    mypromise.then(list.forEach(function () {
//        
//        let li = document.createElement("li");
//        li.appendChild(document.createTextNode(list[i]));
//        document.getElementsByClassName(".num_list").appendChild(li);
//
//        console.log(list);
//    });)


//              
//              
//               fetch(url)
//        .then(function (response) {
//            console.log(response);
//            return response.json;
//
//        })
//
//        .then(function (data) {
//            console.log(data);
//
//            let jsonData = JSON.stringify(data);
//            console.log(data);
//        })
//        .then(function () {
//
//            for (var i = 0; i < document.getElementById("digits").value; i++) {
//                list.push(Math.floor(Math.random() * document.getElementById("max").value));
//            }
//        })
//        .then(function ({
//            li.innerHTML = "";
//
//            for (let item in data) {
//                li.appendChild(document.createTextNode(list[item]));
//                document.getElementsByClassName(".num_list").appendChild(li);
//
//                console.log(list);
//            }
//        }))
//        .catch(function (error) {
//            alert(error);
//        });
//
//
//
//
//}
//


// let response = new Response(url, customSettings);
//    let list = [];
//    let li = document.createElement("li");
//
//
//    fetch(url)
//        .then(function (response) {
//            console.log(response);
//            return response.json;
//
//        })
//
//        .then(function (data) {
//            console.log(data);
//
//            let jsonData = JSON.stringify(data);
//            console.log(data);
//        return data;
//        })
//        .then(function (item) {
//
//            for (var i = 0; i < document.getElementById("digits").value; i++) {
//                list.push(Math.floor(Math.random() * document.getElementById("max").value));
//            }
//        return item;
//        })
//        .then(function () {
//            li.innerHTML = "";
//
//            li.appendChild(document.createTextNode(list[item]));
//            document.getElementsByClassName(".num_list").appendChild(li);
//
//            console.log(list);
//        })
//        .catch(function (error) {
//            alert(error);
//        });
//
//function getData() {
//
//
//    let formData = new FormData(); /*Para?*/
//
//    formData.append("digits", document.getElementById("digits").value);
//    formData.append("max", document.getElementById("max").value);
//    formData.forEach((item, index) => console.log(index + ": " + item)); //This one works good!
//
//
//    let customSettings = {
//        method: "POST", //I can use POST and GET Uppercase always
//        mode: "cors", // cors or no-cors
//        body: formData
//    };
//
//    let response = new Response(url, customSettings);
//
//
//    fetch(url, customSettings)
//        .then(function (response) {
//            console.log(response);
//            return response.json;
//        })
//        .then(function (data) {
//            console.log(data);
//
//            let jsonData = JSON.stringify(data);
//            console.log(data);
//
//            document.getElementsByClassName(".num_list").innerHTML = jsonData;
//
//
//        })
//        .catch(function (error) {
//            alert(error);
//        })
//
//
//}
