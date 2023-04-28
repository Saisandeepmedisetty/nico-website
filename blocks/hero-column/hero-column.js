export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('.hero-column-container picture');
      const contentSection = col.querySelector('.hero-column-container h1');
      const paragraphSection = col.querySelector('.hero-column-container p');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('hero-column-img');
        }
      }
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper && contentWrapper.children.length === 3) {
            contentWrapper.classList.add('hero-content-column');
        }
      }
      if(paragraphSection) {
        const paragraphWrapper =  paragraphSection.closest('p');
        if(paragraphWrapper) {
            paragraphWrapper.classList.add('hero-description');
        }
      }
    });
  });
}
