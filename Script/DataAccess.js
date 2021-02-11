// function getServiceMeta(){
    
// console.log("called function.")
// }

function getServiceMeta(){
    
    console.log("getServiceMeta called.")

    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/indices/api/meta';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {

        var rtn = Http.responseText;
        var idx =  JSON.parse('{"serviceName": "Index Data As A Service","serviceVersion":"0.0.1"}');
        var svcMeta = JSON.parse(rtn);
        //console.log(JSON.parse(Http.responseText));
        
        // document.getElementById("indexServiceDesc").innerHTML = result.serviceDescription;

        console.log(rtn);
      }
}

function getHelloWorld(){
    console.log("Hello World has been called.")
}