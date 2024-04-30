export default function decorate(block) {
  let buttonColumn = '';
  let iconString = '';

  if (block.closest('.header-section')) {
    buttonColumn = block.closest('.header-section').querySelector('.numbered-column-3');
    iconString = '.icon-chevron';
  }

  if (block.closest('.footer-section')) {
    buttonColumn = block.closest('.footer-section').querySelector('.columns-1-cols');
    iconString = '.icon-nav-arrow-light';
  }

  console.log("buttonColumn", buttonColumn);

  const languageWrapper = block.closest('.language-dropdown-wrapper');
  const langaugeButtonColumn = buttonColumn;
  const languageButton = langaugeButtonColumn.querySelector('.button');
  const buttonArrow = languageButton.querySelector(iconString);
  const languageItems = block.querySelectorAll('.language-dropdown li');
  block.querySelector('.language-dropdown li').classList.add('active');
  langaugeButtonColumn.append(languageWrapper);

  function animateDropdown() {
    languageWrapper.classList.toggle('active');
    languageButton.classList.toggle('active');
  }

  languageButton.addEventListener('click', (e) => {
    animateDropdown();
    e.preventDefault();
  });

  languageItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      block.querySelector('.language-dropdown li.active').classList.remove('active');
      item.classList.add('active');
      languageButton.textContent = item.textContent;
      languageButton.append(buttonArrow);
      animateDropdown();
      e.preventDefault();
    });
  });
}
