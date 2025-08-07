document.addEventListener("DOMContentLoaded", () => {

    let next = document.getElementById("next")
    let score = document.getElementById("scr")
    let main = document.getElementById("main")
    let prev = document.getElementById("prev")
    let start = document.getElementById("start")
    let restart = document.getElementById("restart")

    let arr = []
    let correctAnswers = ["JSON.parse()", "pop()", "32","Returns a value ", "[1, 2, 3]" ]
    let finalScore = []
    let i = 0
    let answer = [
                    {
                        question : "1/ Which method converts JSON to an object?",
                        answers :["JSON.stringify()", "parse.JSON()", "JSON.parse()", "toJSON()"],

                    },
                    {
                        question : "2/ Which array method removes the last element?",
                        answers :["pop()", "shift()", "remove()", "delete()"],

                    },
                    {
                        question : "3/ What will 3 + '2' return",
                        answers :["5", "32", "NaN", "undefined"],

                    },
                    {
                        question :"4/ What does return do in a function?",
                        answers :["Ends the loop", "Stops the page", "Returns a value ", "Stops the page"],
                    },
                    {
                        question :"5/ How to write an array in JS?",
                        answers :["{1, 2, 3}","1, 2, 3", "[1 2 3]", "[1, 2, 3]"],
                    }        
    ]


    start.addEventListener("click" , quiz)

    function quiz(){ 
            start.style.display = "none"
            if(i<=4) {
                        main.innerHTML =
                                `
                                  <h4 class="question">${answer[i].question}</h4>
                                  <div class="answers">
                                         <button class="answer" >${answer[i].answers[0]}</button>
                                         <button class="answer">${answer[i].answers[1]}</button>
                                         <button class="answer">${answer[i].answers[2]}</button>
                                         <button class="answer">${answer[i].answers[3]}</button>
                                  </div>
                                ` 
                       if(i>0){prev.style.display = "flex"}
        
                        arr.push(main.innerHTML)   
            }else{ 
                result()
            }    
            i++

            let answers =document.querySelectorAll(".answer") 

             answers.forEach((btn)=>{
                btn.addEventListener("click",()=>{
                    if(correctAnswers.includes(btn.innerHTML)){
                                            btn.style.backgroundColor = "rgb(118, 205, 137)"
                                            btn.style.color = "white"
                                            if(!finalScore.includes(btn.innerHTML)) { 
                                                finalScore.push(btn.innerHTML)
                                            } 
                                            score.innerHTML = `Score ${finalScore.length}/5`
                                            btn.disabled = true;
                                            next.style.display = "flex"
                                            if(i>1){prev.style.display = "flex"}
                                        }else{
                                            btn.style.backgroundColor = "rgb(242, 0, 0)"
                                            answers.forEach((btn)=>{
                                                    if(correctAnswers.includes(btn.innerHTML)){
                                                    btn.style.backgroundColor = "rgb(118, 205, 137)" 
                                                    btn.style.color = "white"  
                                                    btn.disabled = true;
                                                    next.style.display = "flex"
                                                    if(i>1){prev.style.display = "flex"}                       
                                                    }        
                                            })          
                                        }
                })
             })
        }

        next.addEventListener("click" , quiz)
        console.log(i)
        prev.addEventListener("click", () => {
          if (i > 1) {
               i--
               main.innerHTML = arr[i-1]
               console.log(i)
        }
        })

        function result(){
              next.style.display ="none"
              prev.style.display ="none"
           
              let finalResultesult = finalScore.length
              if(finalResultesult <= 1){
                     main.innerHTML =`<h2 class="question">Learning takes time. You can do it!</h2>`
              }else{
                if(finalResultesult <= 3){
                    main.innerHTML =`<h2 class="question">Nice effort! Just a little more practice.</h2>`
                }else{
                    main.innerHTML =`<h2 class="question">Awesome work! Keep it up!</h2>`
                }
              } 

              restart.style.display ="flex"
              play()
        }

         function play() {
            restart.addEventListener("click", function () {
                    i = 0
                    finalScore = []
                    score.innerHTML = "Score 0/5"  
                    quiz()
                    restart.style.display ="none"
            })
         } 
})