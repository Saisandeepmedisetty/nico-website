export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
     const pic = col.querySelector('.image-banner-component-container picture');
      const contentSection = col.querySelector('.image-banner-component-container h1');
          if (pic) {
              const picWrapper = pic.closest('div');
              if (picWrapper && picWrapper.children.length === 1) {
                // picture is only content in column
                picWrapper.classList.add('image-banner-img');
              }
            }
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper) {
            contentWrapper.classList.add('image-banner-container-card');

        }
        var org_html = contentWrapper.innerHTML;
        var new_html = "<div class='left_border'>" + org_html + "</div>";
        contentWrapper.innerHTML = new_html;
      }
    });
  });
}
