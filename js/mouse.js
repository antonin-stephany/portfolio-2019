const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
})
document.addEventListener('mouseleave', (e) => {
    cursor.classList.add('hidden');
})
document.addEventListener('mouseenter', (e) => {
    cursor.classList.remove('hidden')
})
const links = document.querySelectorAll('a');
for(let i = 0; i <links.length; i++){
  const link = links[i];
  link.addEventListener('mouseover', e => {
    cursor.classList.add('hover');
  })
  link.addEventListener('mouseleave', e => {
    cursor.classList.remove('hover');
  })
}