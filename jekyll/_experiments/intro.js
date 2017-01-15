define( require => {
    const Vue = require('vue')
    window.vm = new Vue({
        el: '#introApp',
        data: () => ({
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            size: -250
        }),
        template: `<svg :viewBox=" '0 0 ' + screen.width + ' ' + screen.height ">
            <circle ref="circle3" r="0" fill="#FF8F00" cx="50%" cy="50%"></circle>
            <circle ref="circle2" r="0" fill="#FFA000" cx="50%" cy="50%"></circle>
            <circle ref="circle1" r="0" fill="#FFB300" cx="50%" cy="50%"></circle>
        </svg>`,
        computed: {
            fillRadius() {
                // Pythagoras!
                return Math.sqrt(Math.pow(this.screen.width / 2, 2) + Math.pow(this.screen.height / 2, 2))
            }
        },
        mounted() {
            requirejs(['gsap'], (gsap) => {
                const {circle1, circle2, circle3} = this.$refs
                const circles = [circle3, circle2, circle1]
                const tl = new TimelineMax()
                tl.to(circle3, 1.4, {attr: {r: this.fillRadius}, ease: Power2.easeIn })
                tl.to(circle2, 1.15, {attr: {r: this.fillRadius}, ease: Power2.easeIn }, 0.3)
                tl.to(circle1, 0.9, {attr: {r: this.fillRadius}, ease: Power2.easeIn }, 0.6)
            })
        },
        methods: {
            positive(size) {
                if (size < 0) {
                    return 0
                }
                return size
            }
        }
    })
});
