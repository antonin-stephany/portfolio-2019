//apparition titre premiere visite du site
const observer = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.querySelector('.container h2').classList.add('isVisible');
            entry.target.parentNode.previousSibling.previousSibling.querySelector('.line').classList.add('isVisible');
            observer.unobserve(entry.target)
        }
    }
},{
  threshold: 1.0,
})

const itemsImg = document.querySelectorAll('.img-home img')
for (const item of itemsImg) {
  observer.observe(item)
}

//anim hover img
const itemImgLink = document.querySelectorAll('.img-home')
for (const item of itemsImg) {
  item.addEventListener("mouseover", function(event){
    event.target.parentNode.previousSibling.previousSibling.classList.add("hoverEffect");
    event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.querySelector('.text-outline-container').classList.add("hoverEffect");
  });
  item.addEventListener("mouseleave", function(event){
    event.target.parentNode.previousSibling.previousSibling.classList.remove("hoverEffect");
    event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.querySelector('.text-outline-container').classList.remove("hoverEffect");
  });
}