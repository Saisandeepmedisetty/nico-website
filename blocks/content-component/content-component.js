export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const contentSection = col.querySelector('.content-component-container h1');
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper && contentWrapper.children.length === 4) {
            contentWrapper.classList.add('content-component-column');
        }
      }
    });
  });
}
