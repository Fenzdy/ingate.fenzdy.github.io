


// всплывашка информация про спикера
let speakInfo = document.querySelector('.speak-info');
let spealInfoModal = document.querySelector('.about__speaker-info');

speakInfo.addEventListener('click', () => {
 console.log('test');
 spealInfoModal.classList.toggle('hide');
});


// плавный скрол к форме 
let buttonHeader = document.querySelector('.button');
let buttonAbout = document.querySelector('.about__button');

function sctollInForm (event) {
  event.preventDefault();
  let blockID = buttonHeader.getAttribute('href');
  document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
buttonHeader.addEventListener('click', sctollInForm);
buttonAbout.addEventListener('click', sctollInForm);

// маска на телефон
let phoneInput = document.querySelector('#phone');
let iti = window.intlTelInput(phoneInput, {
  initialCountry: "ru",
})

// вкладки описания уроков
let tabs = document.querySelectorAll('.tab-1');
let contentTab = document.querySelectorAll('.content-tab');
console.log(tabs);
console.log(contentTab);

for(let i = 0; i < tabs.length; i++) {
  
  tabs[i].addEventListener('click', (event) => {
    event.preventDefault();
    console.log(tabs[i]);
    // меняем классы
    for(let j = 0; j < contentTab.length; j++) {
      if(j == i) {
        contentTab[j].classList.remove('hide-displ')
        tabs[j].classList.add('active-course');
      } else {
        contentTab[j].classList.add('hide-displ')
        tabs[j].classList.remove('active-course')

      }
    }
    
  });
}
