export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const contentSection = col.querySelector('.grid-component-container h1');
      const CreditCardContentSection = col.querySelector('.grid-component-container h2');
      if(contentSection) {
        const contentWrapper = contentSection.closest('div').parentElement;
        if(contentWrapper) {
            contentWrapper.classList.add('grid-component-container-card');
        }
      }
      if(CreditCardContentSection) {

                const CreditCardContentSectionWrapper = CreditCardContentSection.closest('div').parentElement;
                if(CreditCardContentSectionWrapper) {
                    CreditCardContentSectionWrapper.classList.add('grid-component-credit-card');
                }

      }
    });
  });
}
