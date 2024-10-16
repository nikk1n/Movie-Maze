document.addEventListener("DOMContentLoaded", function() {
  //Finds faq elements
  const faqToggleButton = document.getElementById("faq-toggle");
  const faqSection = document.getElementById("faq-section");
  const faqQuestions = document.querySelectorAll('.faq-button');
  //Faq toggle and size calculation
  faqToggleButton.addEventListener("click", () => {
    if (faqSection.style.display === "none" || faqSection.style.display === "") {
      faqSection.style.display = "block";
        faqSection.style.marginBottom=faqSection.childElementCount*25+"px";
    } else {
      faqSection.style.display = "none";
    }
  });
//Toggle for each question
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});