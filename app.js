const ourMenuSaladSection = document.querySelector(".ourMenu_salad--section");
const ourMenuIcons = document.querySelectorAll(".ourMenu__icons img");

const addCard = function (divName, className, product, nutrition) {
  const html = `
    <div class="ourMenu__${className}">
          <img class="salad" src="./assest/${className}-1.png" alt="" />
          <p class="ourMenu__${className}-name">${className} >>${product}<<</p>
          <p>${nutrition}</p>

          <div class="ourMenu__salad--icons">
            <img src="./assest/icon-heart.png" alt="" class="heart" />
            <img src="./assest/icon-sale.png" alt="" class="sale" />
          </div>
    </div>
    `;

  divName.insertAdjacentHTML("afterbegin", html);
};

addCard(ourMenuSaladSection, "salad", "Ceaser", "170g /340 cal");
addCard(ourMenuSaladSection, "salad", "Caprese", "70g /140 cal");
addCard(ourMenuSaladSection, "salad", "Tabbouleh", "120g /440 cal");

//////////////////////////////////////////////////////////////////////////////////////////////
// JUST FOR TESTING
ourMenuIcons.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    if (e.target === icon) {
      ourMenuSaladSection.style.display = "flex";
    }
  });
});
