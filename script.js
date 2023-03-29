// Heading
let heading= document.querySelector(".headingText");
let speed= 400;
let text= "PARIS";
let idLetter= 1;

function printText(){
    heading.innerText = text.slice(0, idLetter);
            idLetter++;

        if(idLetter> text.length){
            idLetter = 1;
        }

           setTimeout(printText, speed);
}

printText()

// Photogallery
let slides= document.querySelectorAll(".photos")

slides.forEach(function(one){
    one.addEventListener("click",function(e){
        Delete();
        one.classList.add("active")
    })

   
    
})

function Delete(slide){
    slides.forEach(function(oneSlide){
        oneSlide.classList.remove("active")
    })
}

// 10 facts
let Paris=[{
    keyword: "Disneyland",
    text: "Despite what the name implies, Disneyland Paris is not actually in Paris. It is actually in Marne-la-Vallée, 33 kilometers from the center of the city."
},{
    keyword: "Bulbs",
    text: "Making sure the Eiffel Tower is visible across the city comes at quite a cost. The landmark boasts 20,000 bulbs which illuminate the tower as night falls."
},{
    keyword: "Catacombs",
    text: "Tucked beneath Paris is a labyrinth of catacombs, home to miles upon miles of tunnels and millions of skeletons."
},{
    keyword: " Mona Lisa",
    text: "In 1911, Italian thief Vincenzo Peruggia was able to casually steal the piece from The Louvre, lifting it from the wall under the pretense of being an employee."
},{
    keyword: "Lights",
    text: "Paris is known as city of lights. The term was coined during the Enlightenment Period of the Mid-17th Century under Louis XIV reign, which was the precursor to the French Revolution."
},{
    keyword: "Water",
    text: "The construction of water fountains around the city with both, still and sparkling water on, offer to reduce public reliance on disposable plastic bottles."
},{
    keyword: "The Louvre",
    text: "It would take 8 months to view every piece of art in The Louvre."
},{
    keyword: "Bread",
    text: "Traditionally there is a yearly bread festival held in the very centre of Paris whereby all things carb-related are celebrated. "
},{
    keyword: "Flamel",
    text: "Nicolas Flamel was a real person. And he lived in Paris! You can even still see his house today."
},{
    keyword: "Motto",
    text: "The motto for the city of Paris is Fluctuat nec Mergitur. The phrase is in Latin and literally translates to: tossed but not sunk."
}]

let renderFacts= function(city, TryToFind){
            let result= city.filter(function(one){
                return one.keyword.toLowerCase().includes(TryToFind.searchText.toLowerCase())
            })
            document.querySelector(".output").innerHTML=""

            result.forEach(function(fact){
                let paragraph= document.createElement("p")
                paragraph.textContent= fact.text
                document.querySelector(".output").appendChild(paragraph)
                document.querySelector(".output").style.cssText = "border: 2px solid #766bf0; border-radius: 10px; padding: 10px; box-shadow: 5px 5px 5px #766bf0; font-family: Arial, Helvetica, sans-serif;" 
            })
}
let filters={
    searchText:""
}
document.querySelector("#myInput").addEventListener("input", function(e){
            filters.searchText= e.target.value
            renderFacts (Paris, filters)  
})

// Scroll
let listFacts= document.querySelector(".facts")
let factsHeading= document.querySelector(".scrollFacts").offsetTop

listFacts.addEventListener("click",function(){
    scrollTo({
            top: factsHeading,
            behavior: "smooth"
    });
})
let Marie= document.querySelector(".marie")
let curieHeading= document.querySelector(".scrollCurie").offsetTop

Marie.addEventListener("click",function(){
    scrollTo({
        top: curieHeading,
        behavior: "smooth"
    });
})
let form= document.querySelector(".formCont")
let formHeading= document.querySelector(".flex").offsetTop


form.addEventListener("click",function(){
    scrollTo({
        top: 3500,
        behavior: "smooth"
    });
})

let paris= document.querySelector(".photoParis")
let parisHeading= document.querySelector(".scrollParis").offsetTop
console.log(parisHeading)

paris.addEventListener("click",function(){
    scrollTo({
        top: parisHeading,
        behavior: "smooth"
    });
})

// TOP button-- SHOW/HIDE AFTER CLICK EVENT

// scroll button to facts heading and back
    let facts= document.querySelector(".scrollFacts")
    facts.style.cssText=`display: flex; gap: 1rem;`
    let button1= document.createElement("button")
    button1.textContent="TOP"
    button1.style.cssText=`display: none; padding: 4px; border: none; background-color: #766bf0; border-radius: 5px; font-weight: 600;`
    facts.appendChild(button1)

// scroll button to marie curie heading and back
    let curie= document.querySelector(".scrollCurie")
    curie.style.cssText=`display: flex; gap: 1rem;`
    let button2= document.createElement("button")
    button2.textContent="TOP"
    button2.style.cssText=`display: none; padding: 4px; border: none; background-color: #766bf0; border-radius: 5px; font-weight: 600;`
    curie.appendChild(button2)

    // scroll button to paris heading and back
    let parisPhoto= document.querySelector(".scrollParis")
    parisPhoto.style.cssText=`display: flex; gap: 1rem; `
    let button3= document.createElement("button")
    button3.textContent="TOP"
    button3.style.cssText=`display: none; padding: 2px; border: none; background-color: #766bf0; border-radius: 5px; font-weight: 600;`
    parisPhoto.appendChild(button3)

        // scroll button to contact heading and back
    let contact= document.querySelector(".scrollContact")
    contact.style.cssText=`display: flex; gap: 1rem;`
    let button4= document.createElement("button")
    button4.textContent="TOP"
    button4.style.cssText=`display: none; padding: 2px; border: none; background-color: #766bf0; border-radius: 5px; font-weight: 600; width: 40px; height: 40px; margin-top: 4%;`
    contact.appendChild(button4)

window.addEventListener("scroll", function(){
    let scrolled= this.window.scrollY
    
    if( Math.ceil(scrolled) === factsHeading){
        button1.style.display= "block";

        button1.addEventListener("click", function(){ 
            scrollTo({
                top: listFacts,
                behavior: "smooth"
        }); 
            button1.style.display= "none";
        })
    } else if( Math.ceil(scrolled) === curieHeading){
        button2.style.display= "block";

        button2.addEventListener("click", function(){  
            scrollTo({
                top: Marie,
                behavior: "smooth"
        });
            button2.style.display= "none";
        })
    } else if( Math.ceil(scrolled) === parisHeading){
        button3.style.display= "block";

        button3.addEventListener("click", function(){  
            scrollTo({
                top: paris,
                behavior: "smooth"
        });
           button3.style.display= "none";
        })
    } else if( Math.ceil(scrolled) === formHeading){
        button4.style.display= "block";

        button4.addEventListener("click", function(){ 
            scrollTo({
                top: form,
                behavior: "smooth"
        }); 
            button4.style.display= "none";
        })
    }

})



