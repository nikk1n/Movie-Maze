document.addEventListener("DOMContentLoaded", function() {
  const faqToggleButton = document.getElementById("faq-toggle");
  const faqSection = document.getElementById("faq-section");
  const faqQuestions = document.querySelectorAll('.faq-button');

  faqToggleButton.addEventListener("click", () => {
    if (faqSection.style.display === "none" || faqSection.style.display === "") {
      faqSection.style.display = "block";
        faqSection.style.marginBottom=faqSection.childElementCount*25+"px";
    } else {
      faqSection.style.display = "none";
    }
  });

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