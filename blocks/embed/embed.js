/*
 * Embed Block - To be used for iframes
 */

const getDefaultEmbed = (url) => `<iframe src="${url.href}" title="Content from ${url.hostname}" loading="lazy"></iframe>`;

const loadEmbed = (block, link) => {
  if (block.classList.contains('embed-is-loaded')) {
    return;
  }

  const url = new URL(link);
  block.innerHTML = getDefaultEmbed(url);
  block.classList = 'block embed';
  block.classList.add('embed-is-loaded');
};

export default function decorate(block) {
  const link = block.querySelector('a').href;
  block.textContent = '';

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      observer.disconnect();
      loadEmbed(block, link);
    }
  });
  observer.observe(block);
}