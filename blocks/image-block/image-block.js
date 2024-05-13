export default async function decorate(block) {
  const linkTag = document.createElement('a');
  const firstPara = block.querySelector('p');
  const linkHref = block.querySelector('.button').getAttribute('href');

  if (linkHref) {
    linkTag.setAttribute('href', linkHref);
    linkTag.innerHTML = firstPara.innerHTML;
    firstPara.parentNode.replaceChild(linkTag, firstPara);

    block.lastElementChild.remove();
  }
}
