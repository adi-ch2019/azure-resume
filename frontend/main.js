window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const functionApi='http://localhost:7071/api/GetDefaultResume';

const getVisitCount=()=>{
    let count =30;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Site called function API.");
        count= response.count;
        document.getElementById("counter").innerHTML=count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}