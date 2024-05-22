export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col, i) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }

      // numbered columns
      if (col.closest('.numbered-column') !== null) {
        col.classList.add('numbered-column');
        col.classList.add(`numbered-column-${i + 1}`);
      }

      // footer column nav toggle
      if (col.closest('.footer-section') && col.querySelector('ul .button')) {
        const footerMenuBtn = col.querySelector('.button');

        footerMenuBtn.addEventListener('click', (e) => {
          footerMenuBtn.closest('li').classList.toggle('active');
          e.preventDefault();
        });
      }

      // timeline toggle
      if (col.closest('.timeline') && col.querySelector('h5')) {
        const title = col.querySelector('h5').innerHTML;
        const button = document.createElement('button');
        button.innerHTML = title;
        button.setAttribute('type', 'button');
        button.classList.add('timeline-btn');
        col.prepend(button);

        button.addEventListener('click', (e) => {
          const activeElem = document.querySelector('.timeline-active');
          const parentRow = e.target.parentElement.parentElement;

          if (activeElem !== null && !parentRow.classList.contains('timeline-active')) {
            activeElem.classList.remove('timeline-active');
          }
          col.parentElement.classList.toggle('timeline-active');
          col.scrollIntoView({
            behavior: 'smooth',
          });
          e.preventDefault();
        });
      }
    });
  });
}
