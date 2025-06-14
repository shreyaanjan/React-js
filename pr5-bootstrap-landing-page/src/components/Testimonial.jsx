import Title from "./Title"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';

const Testimonial = () => {
    let title = "Customer Review";
    const testimonials = [
        {
            text: `Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.`,
            name: "Junl Sarukh",
            role: "CEO Of Softing",
            image: "/public/images/testimony-1.jpg"
        },
        {
            text: `Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.`,
            name: "Anil Spia",
            role: "Director of Softing",
            image: "/public/images/testimony-2.jpg"
        },
        {
            text: `Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal.`,
            name: "Paul Munni",
            role: "Developer of Softing",
            image: "/public/images/testimony-3.jpg"
        }
    ];
    return (
        <section className="testimony-section">
            <div className="container">
                <Title title={title} />
            </div>
            <div className="container mt-5">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Card className="border-0 bg-transparent">
                                <Card.Body>
                                    <Card.Text className="mb-5 testimony-txt">
                                        {testimonial.text}
                                    </Card.Text>
                                    <div className="d-flex justify-content-center mb-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-circle"
                                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <h5 className="fw-bold mt-4 testimony-name">{testimonial.name}</h5>
                                    <p className="testimony-role mb-3">{testimonial.role}</p>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial