

let creat = document.getElementById('creatmain')
let userimg = document.getElementById('userimg')
let exit = document.getElementById('exit')
let userEmail = document.getElementById('userEmail')
let header = document.getElementById('header')
let creatFilter = document.querySelector(".cardFilter")
let search = document.getElementById("search")
let btn = document.getElementById("btn")
let catigoryPhon = document.querySelectorAll(".catigoryPhon")



// creat card main 

window.addEventListener('DOMContentLoaded', function () {

    let user = JSON.parse(localStorage.getItem("User"))
    if (user) {
        userimg.style.display = 'none'
        exit.style.display = 'none'
        userEmail.style.display = 'block'
        userEmail.textContent = `${user.email}`
    }
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET"
    })
        .then(respons => respons.json())
        .then(phon => {
            if (phon) {
                phon.forEach(element => {
                    creat.innerHTML += `
        <div class="card" id="${element.id}">
           <img src="./img/iphon.webp" alt="phon img">
           <div class="about">
               <p class="phonName">
                   ${element.name}
               </p>
               <p>
                   ${element.price}
               </p>
           </div>
           <p>${element.description}</p>
               <button class="showbtn" id="${element.id}">Batafsil</button>
       </div>
                
                `
                });


                let phonName = document.querySelectorAll(".phonName")     
                    btn.addEventListener("click", function () {
                        phonName.forEach(el => {
                            if(true){
                               el.textContent.trim()
                              if(el.textContent.trim().toLowerCase() == search.value.toLowerCase()){
                                search.value = ''
                                let paret = el.parentNode.parentNode.id
                                fetch(`https://auth-rg69.onrender.com/api/products/${paret}`, {
                                    method: "GET"
                                })
                                    .then(respons => respons.json())
                                    .then(phon=> {  console.log(phon);
                                        if (phon) {
                                            header.style.display = 'none'
                                            creat.style.display = 'none'
                                            creatFilter.style.display = "block"
                                            creatFilter.innerHTML = `
                                <div class="phonCarde">
                                  <div class="img"> <img id="img" src="./img/iphon.webp" alt="phon img">
                                </div>
                                  <div class="content">
                                       <p>${phon.name}</p>
                                       <p>${phon.price}</p>
                                       <p>${phon.description} dolor sit amet consectetur adipisicing elit. Vero maiores sequi perferendis assumenda fuga atque inventore libero quasi, numquam esse enim officiis, beatae sint facere? Repellendus voluptatibus ad sint vero vel possimus tenetur cum doloribus temporibus delectus error, itaque beatae.
                                       </p>
                                        <button id="clouseBtn">Orqaga qaytish</button>
                                  </div> 
                                </div>
                                
                                `
                                        }
                                        let clouseBtn = document.getElementById('clouseBtn')
                                        clouseBtn.addEventListener("click", function () {
                                            window.location.reload()
                                        })
                                    })

                             }
                               
                            }   
                    })
                })

              

               

            }

            // let phonName = document.querySelectorAll(".phonName")  
            // catigoryPhon.forEach(el => {
            //    el.addEventListener("click", function(){
            //     let catigory = el.textContent.toLocaleLowerCase
            //     phonName.forEach(phon => {
            //         console.log(phon);
            //     })
            //    })
            // })


            let showbtn = document.querySelectorAll(".showbtn")
            showbtn.length && showbtn.forEach(phon => {
                phon.addEventListener("click", function () {
                    let showphon = phon.id
                    if (showphon) {
                        fetch(`https://auth-rg69.onrender.com/api/products/${showphon}`, {
                            method: "GET"
                        })
                            .then(respons => respons.json())
                            .then(phon => {
                                if (phon) {
                                    header.style.display = 'none'
                                    creat.style.display = 'none'
                                    creatFilter.style.display = "block"
                                    creatFilter.innerHTML = `
                        <div class="phonCarde">
                          <div class="img"> <img id="img" src="./img/iphon.webp" alt="phon img">
                        </div>
                          <div class="content">
                               <p>${phon.name}</p>
                               <p>${phon.price}</p>
                               <p>${phon.description} dolor sit amet consectetur adipisicing elit. Vero maiores sequi perferendis assumenda fuga atque inventore libero quasi, numquam esse enim officiis, beatae sint facere? Repellendus voluptatibus ad sint vero vel possimus tenetur cum doloribus temporibus delectus error, itaque beatae.
                               </p>
                                <button id="clouseBtn">Orqaga qaytish</button>
                          </div> 
                        </div>
                        
                        `
                                }
                                let clouseBtn = document.getElementById('clouseBtn')
                                    clouseBtn.addEventListener("click", function () {
                                    window.location.reload()
                                })
                            })
                    }
                })
            })

        })
        .catch(error => console.log(error))
})
