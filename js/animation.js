window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const scroll = window.scrollY;

    // bottom
    let element = document.getElementById('demo1');
    let element2 = document.getElementById('demo2');
    let element3 = document.getElementById('demo3');
    let element4 = document.getElementById('demo4');

    if (scroll >  2600 ) {
      element.classList.add("firstBox")
    } else {
      element.classList.remove("firstBox")
    }

    if (scroll >  2850 ) {
      element2.classList.add("firstBox");
      element.classList.remove("firstBox")
     
    } else {
      element2.classList.remove("firstBox")
    }

    if (scroll >  3000 ) {
      element3.classList.add("firstBox");
      element.classList.remove("firstBox");
      element2.classList.remove("firstBox")
     
    } else {
      element3.classList.remove("firstBox")
    }


    if (scroll >  3100 ) {
      element4.classList.add("firstBox");
      element.classList.remove("firstBox");
      element2.classList.remove("firstBox")
      element3.classList.remove("firstBox")
     
    } else {
      element4.classList.remove("firstBox")
     
    }

    // scroll journy
    let companyBox = document.getElementById("company1");
    let companyBox1 = document.getElementById("company2");
    let companyBox2 = document.getElementById("company3");
    let companyBox3 = document.getElementById("company4");
    let companyBox4 = document.getElementById("company5");
    let companyBox5 = document.getElementById("company6");

    if(scroll > 787){
      companyBox.classList.add("company-sec")
    }
    else{
      companyBox.classList.remove("company-sec")
    }

    if(scroll > 950){
      companyBox1.classList.add("company-sec")
      companyBox.classList.remove("company-sec")
    }
    else{
      companyBox1.classList.remove("company-sec")
    }

    if(scroll > 1235){
      companyBox2.classList.add("company-sec")
      companyBox1.classList.remove("company-sec")
      companyBox.classList.remove("company-sec")
    }
    else{
      companyBox2.classList.remove("company-sec")
    }

    if(scroll > 1517){
      companyBox3.classList.add("company-sec")
      companyBox1.classList.remove("company-sec")
      companyBox.classList.remove("company-sec")
      companyBox2.classList.remove("company-sec")
    }
    else{
      companyBox3.classList.remove("company-sec")
    }

    if(scroll > 1784){
      companyBox4.classList.add("company-sec")
      companyBox1.classList.remove("company-sec")
      companyBox.classList.remove("company-sec")
      companyBox2.classList.remove("company-sec")
      companyBox3.classList.remove("company-sec")
    }
    else{
      companyBox4.classList.remove("company-sec")
    }

    if(scroll > 2049){
      companyBox5.classList.add("company-sec")
      companyBox1.classList.remove("company-sec")
      companyBox.classList.remove("company-sec")
      companyBox2.classList.remove("company-sec")
      companyBox3.classList.remove("company-sec")
      companyBox4.classList.remove("company-sec")
    }
    else{
      companyBox5.classList.remove("company-sec")
    }


    const factBlocks = document.querySelectorAll('.fact-block');
    const descriptionBlocks = document.querySelectorAll('.description-block');
    const factBlocksContainer = document.querySelector('.facts-container');

    if (window.scrollY > 10 && window.scrollY < 130) {
      var scrollAmount = window.scrollY - 10;
  
      // Loop through each element in descriptionBlocks
      descriptionBlocks.forEach(function(block) {
        block.style.top = scrollAmount + "px";
      });
    }
   
   
    console.log("...",  window.scrollY)

   

  });
});

