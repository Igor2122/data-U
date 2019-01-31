const grid_size = 85;  

document.addEventListener('DOMContentLoaded', e => {
  
  const badboys = new BadBoys ('Bad Dude');
  const field = new Field(5, 5, badboys);
  const pacmanIgor = new Pacman('Igor', field, 0, 0);


  field.mount(document.body);
  

  const fieldParent = document.querySelector('.field');
  
  pacmanIgor.mount(fieldParent);
  pacmanIgor.update();

  badboys.mount(fieldParent);

  window.addEventListener('keydown', e => {
    pacmanIgor.movePacman(e);
    
  })

});