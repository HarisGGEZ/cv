const leftbutton = document.querySelector("#left")
const rightbutton = document.querySelector("#right")
const image = document.querySelector("#images")

leftbutton.addEventListener("click", () => {      
    
    if(image.classList.contains("firstimage")){
        image.classList.add("secondimage")    
        image.classList.remove("firstimage")}
    
    else if(image.classList.contains("secondimage")){   
        image.classList.add("thirdimage")    
        image.classList.remove("secondimage")}
    
    else if(image.classList.contains("thirdimage")){   
        image.classList.add("fourthimage")    
        image.classList.remove("thirdimage")}
        

    else if(image.classList.contains("fourthimage")){   
        image.classList.add("firstimage")    
        image.classList.remove("fourthimage")}
    
    })

rightbutton.addEventListener("click", () => {      
        
    if(image.classList.contains("firstimage")){
        image.classList.add("fourthimage")    
        image.classList.remove("firstimage")}
            
    else if(image.classList.contains("secondimage")){   
        image.classList.add("firstimage")    
        image.classList.remove("secondimage")}
            
    else if(image.classList.contains("thirdimage")){   
        image.classList.add("secondimage")    
        image.classList.remove("thirdimage")}
    
    else if(image.classList.contains("fourthimage")){   
        image.classList.add("thirdimage")    
        image.classList.remove("fourthimage")}
                
    })
                          


