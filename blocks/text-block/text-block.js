export default function decorate(block) {
  /* Social Media Icons List */
  if (block.classList.contains('social-media-icons')) {
    const socialLinks = block.querySelectorAll('a');

    socialLinks.forEach((link) => {
      link.setAttribute('target', '_blank');
    });
  }
}
