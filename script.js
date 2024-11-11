let formButton=document.querySelector("#btn");
      formButton.addEventListener("click",(event)=>{
        event.preventDefault();
          let age=document.getElementById("age").value;
          let name=document.getElementById("name").value;
          if(!age||!name){
            
            alert("Please enter valid details");
          }else{
            console.log("form is submitted");
            const p=new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                     if(age>18){
                       resolve(`Welcome, ${name}. You can vote.`)
                     }else{
                        reject(`Oh sorry ${name}. You aren't old enough`)
                     }
                 },4000)
            })
            p.then((post)=>{
            alert(post);
          }).catch((err)=>{
             alert(err);
          })
          }
         
          
      })