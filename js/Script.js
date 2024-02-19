function myFun(num) {
    var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("moreText" + num);
    var btnText = document.getElementById("myBtn" + num);

    if(moreText.classList.contains("d-none")){
        dots.style.display='none';
        btnText.innerHTML='read less';
        moreText.classList.remove("d-none");
    }
    else{
        dots.style.display='inline';
        btnText.innerHTML='Read more';
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

document.getElementsByClassName('year').textContent="2024";