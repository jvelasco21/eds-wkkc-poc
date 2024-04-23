export default function decorate(block) {
  const hpHero = block.closest('.hero-homepage');

  if (hpHero) {
    const foreground = document.createElement('div');
    foreground.className = 'hero-foreground';

    [...block.children].forEach((item, i) => {
      if (i !== 0) {
        item.classList.add(`hero-foreground-item-${i}`);
        foreground.append(item);
      } else {
        item.className = 'hero-background';
      }
    });

    block.append(foreground);
  }
}
