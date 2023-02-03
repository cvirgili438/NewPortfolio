

export const hideToView = (object)=>{
    let{english,idES,idEN}=object
     const elementES= document.getElementById(idES)
     const elementEN = document.getElementById(idEN)

    if(english===true){ 
        if(elementES.classList.contains('toView')) elementES.classList.remove('toView')
        elementES.classList.add('toHide') 
        elementES.style.display='none' 
        elementEN.style.display='flex'
        if(elementEN.classList.contains('toHide')) elementEN.classList.remove('toHide')
        elementEN.classList.add('toView')     
            }
      if(english===false){
        if(elementEN.classList.contains('toView')) elementEN.classList.remove('toView')
        elementEN.classList.add('toHide')
        elementEN.style.display='none'
        elementES.style.display='flex'
        if(elementES.classList.contains('toHide')) elementES.classList.remove('toHide')
        elementES.classList.add('toView')


      }
}
