export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('.cards-component-container picture');
      const contentSection = col.querySelector('.cards-component-container h1');
      const paragraphSection = col.querySelector('.cards-component-container p');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('cards-component-img');
        }
      }
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper) {
            contentWrapper.classList.add('cards-component-column');
        }
      }
      if(paragraphSection) {
        const paragraphWrapper =  paragraphSection.closest('p');
        if(paragraphWrapper) {
            paragraphWrapper.classList.add('cards-components-button');
            var icon = document.createElement('i');
            icon.className = "fa-regular fa-arrow-right";
            col.querySelector(".cards-component-container .cards-components-button a").append(icon);
        }
      }
    });
  });
}
