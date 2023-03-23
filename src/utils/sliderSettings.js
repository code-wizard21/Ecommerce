const general = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    infinite: true
}

export const shopSliderSettings = {
    ...general,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
}

export const homeSliderSettings = {
    ...general,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    initialSlide: 2,
    infinite: true
}

export const homeInfoSettings = {
    ...general,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
}