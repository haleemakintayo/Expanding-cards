const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeallclasses()
        panel.classList.add('active')
    })
})
function removeallclasses() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
    
}