const observer = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('isVisible')
            observer.unobserve(entry.target)
        }
    }
},{
    rootMargin: '0px 0px -100px 0px'
})
const itemsTitle = document.querySelectorAll('.container h2')
for (const item of itemsTitle) {
  observer.observe(item)
}
const itemsImg = document.querySelectorAll('.type-p .line')
for (const item of itemsImg) {
  observer.observe(item)
}