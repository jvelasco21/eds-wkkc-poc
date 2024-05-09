export default function decorate(block) {
  const teaserContent = document.createElement('div');
  teaserContent.className = 'teaser-content';

  [...block.children].forEach((row, i) => {
    row.classList.add(`teaser-item-${i}`);

    if (i !== 0) {
      teaserContent.append(row);
    }

    if (row.children.length === 1 && row.querySelector('picture')) row.className = 'teaser-image';
  });

  block.append(teaserContent);
}
