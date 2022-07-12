var lorem = document.querySelector(".para1").textContent;




const sectiontitle = document.querySelector("h1");


// document.querySelector(".para1").innerText =(sectiontitle.textContent); 



// Exo part 1

// document.querySelector("h1").style.backgroundColor = 'green';




// Exo part 2


// let tab = document.querySelectorAll("h1")

// for (let i = 0; i < tab.length; i++) {
//     tab[i].style.backgroundColor = 'green';
// }



// Exo bouton

const btn = document.getElementById('bouton');
let x = 1;

btn.onclick = function(){
    if (x == 1) {
        document.querySelector(".para1").innerText =(sectiontitle.textContent);

}
    else {
        x = 0;

        document.querySelector(".para1").innerText =(lorem);

    }

x++
}

// EX Image


document.getElementById("imgid").src="images/steak.jpg";




const img2 = document.getElementById('imgid');
let a = 1;


img2.onclick = function(){
    if (a == 1) {
        document.getElementById("imgid").src="images/caillou.jpg";

        let attribut = img2.getAttribute("src");
        console.log(attribut);
    }
    else {
        a = 0;

        document.getElementById("imgid").src="images/steak.jpg";

        let attribut = img2.getAttribute("src");
        console.log(attribut);
    }

a++;
}



// EX Couleur


const couleurspage = document.getElementById("couleurs");

couleurspage.onclick = function(){
    document.getElementById('xxx').onclick = function() {
        // element
        var elt = this;
        // id de l'element
        var idElt = this.getAttribute('id');
        };



    document.body.style.backgroundColor = "red";
    console.log ("a");
    console.log (idElt)
}