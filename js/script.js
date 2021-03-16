/* ///// Accordion , Functionality ///// */
const questions = document.querySelectorAll(".faq__question");

questions.forEach((q) => {
  q.children[1].addEventListener("click", (event) => {
    q.classList.toggle("active");
    q.nextElementSibling.classList.toggle("active");
  });
});
