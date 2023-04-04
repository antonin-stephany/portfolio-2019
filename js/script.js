gsap.registerPlugin(ScrollTrigger);

let imgs = gsap.utils.toArray(".img-home")
gsap.to(imgs, {
    scrollTrigger: {
        trigger: imgs,
        start:"top top",
        end:"bottom top",
        markers: true,
        toggleActions: "restart none reverse none"
    },
    x:400,
    rotation: 360,
    duration:3
});

/*
// ANIMATION SKEW
let skewSetter = gsap.quickSetter(".img-home", "skewY", "deg")
let proxy = {skew: 0}
ScrollTrigger.create({
    onUpdate: self =>{
        let skew = self.getVelocity() / -300;
        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;
            gsap.to(proxy, {skew: 0, duration:1, ease:"power3", overwrite:true, onUpdate: () => skewSetter(proxy.skew)})
        }
    }
});
gsap.set(".img-home",{transformOrigin:"center center", force3D:true})
*/