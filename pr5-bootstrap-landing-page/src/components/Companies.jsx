import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from './Image';

const Companies = () => {
    let imgOne = "/images/company-1.png";
    let imgTwo = "/images/company-2.png";
    let imgThree = "/images/company-3.png";
    let imgFour = "/images/company-4.png";
    return (
        <section className="company-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="company-info">
                            <h4>Trusted by the world's best companies</h4>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className='pt-5'>
                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    560: {
                                        slidesPerView: 1,
                                        spaceBetween: 15,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper">
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <Image img={imgOne} width={100} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <Image img={imgTwo} width={100} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <Image img={imgThree} width={100} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex justify-content-center">
                                        <Image img={imgFour} width={100} />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Companies