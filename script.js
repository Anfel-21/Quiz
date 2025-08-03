document.addEventListener("DOMContentLoaded", () => {

    const correctAnswer = document.querySelectorAll(".correct")
    const wrongAnswer = document.querySelectorAll(".wrong")

    let score = document.getElementById("scr")
    let main1 = document.getElementById("main1")
    let main2 = document.getElementById("main2")
    
    let result = 0

    main2.addEventListener("click",function(){
            main2.style.display = "none"
            main1.style.display = "flex"               
    
            correctAnswer.forEach((btn)=>{
                btn.addEventListener("click",function(){
                    btn.style.backgroundColor = "rgb(118, 205, 137)"
                    btn.style.color = "white"
                    result ++
                    score.innerHTML = `Score ${result}/5`
                })
            })

        
            wrongAnswer.forEach((btn)=>{
                btn.addEventListener("click",function(){
                    btn.style.backgroundColor = "rgb(242, 0, 0)"
                    btn.style.color = "white"
                })
            })

    })
    
})
