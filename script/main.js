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
let speakInfo = document.querySelectorAll('.speak-info');
let spealInfoModal = document.querySelectorAll('.about__speaker-info');
let tabs = document.querySelectorAll('.tab-1');
let contentTab = document.querySelectorAll('.content-tab');

for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', (event) => {
    event.preventDefault();
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
  // всплывашка информация про спикера
  speakInfo[i].addEventListener('click', (e) => {
    spealInfoModal[i].classList.toggle('hide');
  });
}


// валидация и отправка формы
$('#formGo').on('click', () => {
  // валидация
  let wrapperForm = document.querySelectorAll('.chek-valid-wrap');
  let noValidForm = document.querySelectorAll('.no-valid-form');
  let inpForm = document.querySelectorAll('.chek-valid');

  for(let i = 0; i < wrapperForm.length; i++) {
    if(!inpForm[i].value) {
      
      inpForm[i].classList.add('no-valid-inp');
      wrapperForm[i].classList.add('request__inp-item--wrapper-valid');
      noValidForm[i].classList.remove('hide');
      return false;
    } else {
      inpForm[i].classList.remove('no-valid-inp');
      wrapperForm[i].classList.remove('request__inp-item--wrapper-valid');
      noValidForm[i].classList.add('hide');
    }
  }
  let email = $('#email').val().trim();
  let name = $('#name').val().trim();
  let phone = $('#phone').val().trim();
  let promo = $('#promo').val().trim();

  // отправка формы
  $.ajax ({
    url: 'script/mail.php',
    type: 'POST',
    cache: false,
    data: {
      'name': name, 
      'email': email, 
      'phone': phone, 
      'promo': promo,
    },
    dataType: 'html',
    beforeSend: function () {
    },
    success: function(data) {
      alert(data);
    }
    
  });
  return false;
});



