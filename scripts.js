const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value;
  // jika inputan kosong kembalikan ke awal
  if (!qrValue) return;
  generateBtn.innerText = 'Generating QR Code...'
  // jika inputan ada maka generate qrcode dari api
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrValue}`;
  qrImg.addEventListener('load', () => { //Jika QR Code sudah muncul
    wrapper.classList.add('active');
    generateBtn.innerText = 'Generate QR Code'
  })
});

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value) {
    wrapper.classList.remove('active')
  }
})

console.log('HiDee')