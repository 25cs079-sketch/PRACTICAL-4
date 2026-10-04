const faqData = [
    {
        question: "What is this portal about?",
        answer: "This portal helps students with resources and updates."
    },
    {
        question: "How do I register?",
        answer: "You can register via the signup page on the portal."
    },
    {
        question: "Where can I see my submissions?",
        answer: "Go to the 'My Submissions' section in your dashboard."
    }
];
const faqContainer =
    document.getElementById("faq-container");
faqData.forEach(function({ question, answer }) {
    const faqItem =
        document.createElement("div");
    faqItem.className = "faq-item";
    const faqQuestion =
        document.createElement("div");
    faqQuestion.className = "faq-question";
    faqQuestion.textContent = question;
    const faqAnswer =
        document.createElement("div");
    faqAnswer.className = "faq-answer";
    faqAnswer.textContent = answer;
    faqQuestion.addEventListener("click", function() {
        if (faqAnswer.style.display === "block") {
            faqAnswer.style.display = "none";
        }
        else {
            faqAnswer.style.display = "block";
        }
    });
    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);
    faqContainer.appendChild(faqItem);
});
const banner =
    document.getElementById("notification");
const closeBtn =
    document.getElementById("closeBanner");
closeBtn.addEventListener("click", function() {
    banner.style.display = "none";
});
const sliderImages = [
    "3.wdf",
    "2.wdf",
    "1.wdf"
];
let currentIndex = 0;
const sliderImage =
    document.getElementById("slider-image");
const prevBtn =
    document.getElementById("prev-btn");
const nextBtn =
    document.getElementById("next-btn");
function updateSlider() {
    sliderImage.src =
        sliderImages[currentIndex];
}
prevBtn.addEventListener("click", function() {
    currentIndex =
        (currentIndex - 1 + sliderImages.length)
        % sliderImages.length;
    updateSlider();
});
nextBtn.addEventListener("click", function() {
    currentIndex =
        (currentIndex + 1)
        % sliderImages.length;
    updateSlider();
});
updateSlider();
const hamburger =
    document.getElementById("hamburger");
const menu =
    document.getElementById("menu");
hamburger.addEventListener("click", function() {
    menu.classList.toggle("show");
    const isOpen =
        menu.classList.contains("show");
    hamburger.setAttribute(
        "aria-expanded",
        isOpen
    );
});
const modal =
    document.getElementById("modal");
const openModal =
    document.getElementById("openModal");
const closeModal =
    document.getElementById("closeModal");
const closeModalButton =
    document.getElementById("closeModalButton");
openModal.addEventListener("click", function() {
    modal.classList.add("show");
});
closeModal.addEventListener("click", function() {
    modal.classList.remove("show");
});
closeModalButton.addEventListener("click", function() {
    modal.classList.remove("show");
});
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
const themeButton =
    document.getElementById("themeButton");
const savedTheme =
    localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem(
            "theme",
            "dark"
        );
    }
    else {
        localStorage.setItem(
            "theme",
            "light"
        );
    }
});