import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }

  [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
            const socialIconSection = col.querySelector('.footer .image-logo > div');
            if(socialIconSection) {
            var a = document.createElement('a');
                a.target = '_blank';
                a.href = 'https://www.linkedin.com/company/national-indemnity-company/';

            var icon = document.createElement('i');
            icon.className = "fa-regular fa-linkedin";
            a.append(icon);
            socialIconSection.append(a);
            }
          });
        });

}
