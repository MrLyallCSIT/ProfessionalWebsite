        //Optional: Pause/play on hover. Remove this block if not needed
        const carousel = document.getElementById('carouselExampleCaptions')

        carousel.addEventListener('mouseover', function () {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel)
            carouselInstance.pause()
        })

        carousel.addEventListener('mouseout', function () {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel)
            carouselInstance.cycle()
        })