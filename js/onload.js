// animation onload
window.onload = () => {
    setTimeout( function () {
      const transition_el = document.querySelector('.animation-onload');
      const links = document.querySelectorAll('a');
      setTimeout(() => {
        transition_el.classList.remove('is-active');
      }, 500);
      for(let i = 0; i <links.length; i++){
        const link = links[i];
        link.addEventListener('click', e => {
          e.preventDefault();
          let target = link.href;
          transition_el.classList.add('is-active');
          setTimeout(() => {
            window.location.href = target;
          }, 500);
        })
      }
    },200);
  }