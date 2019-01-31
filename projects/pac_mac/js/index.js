document.addEventListener('DOMContentLoaded', e => {
  const fieldParent = document.querySelector('.field');
  const pacmanIgor = new Pacman('Igor');
  pacmanIgor.mount(fieldParent);

  window.addEventListener('keydown', e => {
    pacmanIgor.movePacman(e);
    
  })



  console.log(pacmanIgor);
});