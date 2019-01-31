document.addEventListener('DOMContentLoaded', e => {

  
  const field = new Field('1020px', '510px');
  field.mount(document.body);
  
  const fieldParent = document.querySelector('.field');
  const pacmanIgor = new Pacman('Igor');

  pacmanIgor.mount(fieldParent);

  window.addEventListener('keydown', e => {
    pacmanIgor.movePacman(e);
    
  })



  console.log(pacmanIgor);
});