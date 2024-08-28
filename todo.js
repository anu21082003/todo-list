   function add(){
    var parent=document.getElementById("parent")
    var a=document.getElementById("todo").value
    if(a.length!==0){
        
 var para=document.createElement("p")   
 para.className="condition"
 
  para.innerText=a
  
  
  parent.appendChild(para)
  
 
 
  var image=document.createElement("img")
  image.src="/asset/dustbin.png"
  para.append(image)
  image.className="imagedust"
  para.className="ma"
  image.onclick=(()=>{
    para.remove()
    todo.value=""
  })

    }
    
 
   }








