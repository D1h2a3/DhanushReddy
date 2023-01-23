
 /// $('a').click(function(e){
  //  e.preventDefault();
  // $('body, html').animate({
   //    scrollTop: $( $(this).attr('href') ).offset().top - 120
   //}, 1000);
//});
///
const text = document.querySelector(".sec-text");

     const textLoad = () => {
         setTimeout(() => {
                text.textContent = "Web Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Student";
            }, 4000);
            setTimeout(() => {
                text.textContent = "life Enjoyer";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);

    

