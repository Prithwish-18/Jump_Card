gsap.to('.card',{
    opacity: 9,
    scale: 1,
    duration: 5,
    onComplete: () => {
        gsap.to('.card',{
            y: -120,
            repeat: -10,
            yoyo: true,
            duration:  0.9,
        });
    }
});