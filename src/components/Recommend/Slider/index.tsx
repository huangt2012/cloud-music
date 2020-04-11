import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { SliderContainer } from './style'
interface Props {
    banners: Model.Recommend.Banner[]
}

function Slider(props: Props) {
    const [sliderSwiper, setSliderSwiper] = useState<Swiper>()
    const { banners } = props
    useEffect(() => {
        if (banners.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper(".slider-container", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: { el: '.swiper-pagination' },
            })
            setSliderSwiper(newSliderSwiper)
        }
    }, [banners.length, sliderSwiper])
    return (
        <SliderContainer>
            <div className="before"></div>
            <div className='slider-container'>
                <div className='swiper-wrapper'>
                    {banners.map((item) => (
                        <div className="swiper-slide" key={item.image}>
                            <div className="slider-nav">
                                <img src={item.image} width="100%" height="100%" alt="推荐" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SliderContainer>
    )
}

export default React.memo(Slider)