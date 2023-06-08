// ********sleact btn and article*******
const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll(".question");


questions.forEach((question)=>{

    // ****** sleact btn from articals ************ 
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', (e) =>{
          
       //************** pre text hidden when new question open ***********
        questions.forEach(item =>{
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        
        //*********** */ minus btn and text show and hidden ***********
        question.classList.toggle('show-text')
    })
})


// btns.forEach(btn=>{
//     btn.addEventListener('click', (e)=>{
//         const question = e.target.parentElement.parentElement.parentElement;
//         console.log(question);
//         question.parentElement.classList.toggle("show-text")
//     })
// })