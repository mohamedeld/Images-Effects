const myDiv = document.querySelectorAll(".panel");

myDiv.forEach((panel) => {
    panel.addEventListener("click",()=>{
        myDiv.forEach((panel)=>{
            panel.classList.remove("active")
        });

        panel.classList.add("active");
    })
});

