export default function decorate(block) {

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
                if(CreditCardContentSectionWrapper && CreditCardContentSectionWrapper.children.length === 4) {
                    for (var i = 0; i < CreditCardContentSectionWrapper.children.length; i++) {
                      CreditCardContentSectionWrapper.children[i].classList.add("c" + (i+1));
                    }
                }

      }
    });
  });
}
