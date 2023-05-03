export default function decorate(block) {

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const contentSection = col.querySelector('.claim-component-container h1');
      const paragraphSection = col.querySelector('.claim-component-container p');
      const claimSubTitle = col.querySelector('.claim-component-container h3');
      const promptContainer = col.querySelector('.claim-component-container #prompt-claims-service');
      if(contentSection) {
        const contentWrapper = contentSection.closest('div');
        if(contentWrapper && contentWrapper.children.length === 3) {
            contentWrapper.classList.add('claim-content-column');
        }
      }
      if(claimSubTitle) {
        const subtitleWrapper = claimSubTitle.closest('h3');
        if(subtitleWrapper) {
            subtitleWrapper.classList.add('claim-description');
        }
      }
      if(promptContainer) {
        const promptWrapper = promptContainer.closest('div');
        if(promptWrapper) {
            promptWrapper.classList.add('prompt-container');
        }
        var para = document.createElement('div');
        para.className = "cta_top_border";
        col.querySelector('.claim-component-container #prompt-claims-service').after(para);
      }
    });
  });
}
