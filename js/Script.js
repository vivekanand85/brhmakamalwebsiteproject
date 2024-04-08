function myFun(num) {
    var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("moreText" + num);
    var btnText = document.getElementById("myBtn" + num);

    if(moreText.classList.contains("d-none")){
        dots.style.display='none';
        btnText.innerHTML='Show less';
        btnText.style.padding='.6rem 1.5rem';
        moreText.classList.remove("d-none");
    }
    else{
        dots.style.display='inline';
        btnText.innerHTML='Show more';
        moreText.classList.add('d-none');
       
    }

//     if (moreText.classList.contains("d-none")) {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.classList.remove("d-none");
//     } else {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.classList.add("d-none");
//     }
}

var year1=document.getElementsByClassName('year').textContent=new Date().getFullYear();


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




