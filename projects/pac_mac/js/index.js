const grid_size = 85;  
document.addEventListener('DOMContentLoaded', e => {
  

  const field = new Field(10, 5);
  field.mount(document.body);
  
  const fieldParent = document.querySelector('.field');

  const pacmanIgor = new Pacman('Igor', field);
  pacmanIgor.mount(fieldParent);

  const badboys = new BadBoys ();
  badboys.mount(fieldParent);

  window.addEventListener('keydown', e => {
    pacmanIgor.movePacman(e);
    
  })



  console.log(pacmanIgor);
});