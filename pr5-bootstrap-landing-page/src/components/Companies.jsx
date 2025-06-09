import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from './Image';

const Companies = () => {
    let imgOne = "/public/images/company-1.png";
    let imgTwo = "/public/images/company-2.png";
    let imgThree = "/public/images/company-3.png";
    let imgFour = "/public/images/company-4.png";
    return (
        <section className="company-section">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="company-info">
                            <h4>Trusted by the world's best companies</h4>
                            <p>
                                Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                            </p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className='pt-5'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{clickable: true,}}
                                navigation={true}
                                modules={[Pagination, Navigation]} 
                                className="mySwiper">
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <Image img={imgOne} width={100} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image img={imgTwo} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image img={imgThree} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image img={imgFour} />
                                    </SwiperSlide>
                                </Swiper>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Companies