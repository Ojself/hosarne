export const formatDate = (input) => {
  const datePart = input.match(/\d+/g);
  const year = datePart[0].substring(2);
  const month = datePart[1];
  const day = datePart[2];

  return day + "." + month + "." + year;
};

export const changeLayOutColors = (theme, remove, elementId) => {
  const navbar = document.querySelector("#navbar");
  const footer = document.querySelector("#footer");
  const customElement = document.querySelector(elementId);
  const openingHours = document.querySelector("#opening-hours");
  const adress = document.querySelector("#adress");
  const emailInput = document.querySelector("#email-input");
  const allElements = [
    navbar,
    footer,
    openingHours,
    adress,
    customElement,
    emailInput,
  ];
  if (allElements.some((el) => el === null)) return;

  emailInput.style.backgroundColor = theme;
  customElement.style.backgroundColor = theme;
  navbar.style.backgroundColor = theme;
  footer.style.backgroundColor = theme;
  if (remove) {
    openingHours.classList.add("opacity-0");
    adress.classList.add("opacity-0");
  } else {
    openingHours.classList.remove("opacity-0");
    adress.classList.remove("opacity-0");
  }
};
