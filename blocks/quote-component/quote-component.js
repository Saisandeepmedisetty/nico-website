export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
     const pic = col.querySelector('.quote-component-container picture');
      const contentSection = col.querySelector('.quote-component-container h1');
       const paragraphSection = col.querySelector('.quote-component-container p:last-child');
          if (pic) {
              const picWrapper = pic.closest('div');
              if (picWrapper && picWrapper.children.length === 1) {
                // picture is only content in column
                picWrapper.classList.add('quote-img');
              }
            }
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper) {
            contentWrapper.classList.add('quote-container-card');
        }
        if(paragraphSection) {
                const paragraphWrapper =  paragraphSection.closest('p');
                if(paragraphWrapper && paragraphWrapper.children.length === 2) {
                    paragraphWrapper.classList.add('quote-component-button');
                }
              }
      }
    });
  });
}
