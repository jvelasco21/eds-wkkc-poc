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

      if (col.closest('.footer-section') && col.querySelector('ul .button')) {
        const footerMenuBtn = col.querySelector('.button');

        footerMenuBtn.addEventListener('click', (e) => {
          footerMenuBtn.closest('li').classList.toggle('active');
          e.preventDefault();
        });
      }
    });
  });
}
