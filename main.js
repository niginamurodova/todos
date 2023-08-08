const url = "https://jsonplaceholder.typicode.com/todos"

// const todoform = document.querySelector(".form")

const todoform1 = document.querySelector(".form1")
const todoform2 = document.querySelector(".form2")
const todoform3 = document.querySelector(".form3")
const todoform4 = document.querySelector(".form4")

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")



todoform1.addEventListener("submit", event => {
    event.preventDefault();
    const formText1 = todoform1.text.value


    let a = formText1 * 10;
    let b = a - 9
    function topshiriq1(){
        fetch(url).then(res => res.json()).then((data) => 
        data.forEach( data => {
        for(i = b; i<=a; i++){
            if(data.id === i){
                box1.innerHTML += `<div class = "newDiv">userId: ${data.userId} <br>
                id: ${data.id} <br> 
                title: ${data.title}<br>    
                completed: ${data.completed}<br> </div>`;  
            }
        }
        
        }))
        .catch(error => console.log(error));

    }

    topshiriq1()    


})


    // task2 


todoform2.addEventListener("submit", event => {
    event.preventDefault();
    const formText = todoform2.text.value
    function topshiriq2(){
        fetch(url).then(res => res.json()).then((data) => 
        data.forEach( data => {
            if(data.completed === Boolean(formText)){
                box2.innerHTML += `<div class = "newDiv">userId: ${data.userId} <br>
                id: ${data.id} <br> 
                title: ${data.title}<br>    
                completed: ${data.completed}<br> </div>`;  
            } 
            // else if(!Boolean(formText)){
            //     box2.innerHTML += " error"
            // }
           
           
            
        
        
        }))
        .catch(error => console.log(error));

    }

    topshiriq2()

})
    // task3


    
todoform3.addEventListener("submit", event => {
    event.preventDefault();
    const formText = todoform3.text.value
    
    function topshiriq3(){
        fetch(url).then(res => res.json()).then((data) => 
        data.forEach( data => {
            if(data.userId == formText){
                box3.innerHTML += 
                `<div class = "newDiv">userId: ${data.userId} <br>
                id: ${data.id} <br> 
                title: ${data.title}<br>    
                completed: ${data.completed}<br> </div>`;  
            }
        }))
        .catch(error => console.log(error));

    }

    topshiriq3()

})

    // task4

todoform4.addEventListener("submit", event => {
    event.preventDefault();
    const formText= todoform4.text.value
        
    function topshiriq4(){
        fetch(url).then(res => res.json()).then((data) => 
        data.forEach( data => {
            if(data.id == formText){
                box4.innerHTML += `<div class = "newDiv">userId: ${data.userId} <br>
                id: ${data.id} <br> 
                title: ${data.title}<br>    
                completed: ${data.completed}<br> </div>`;  
            }
        }))
        .catch(error => console.log(error));

    }

    topshiriq4()
})













