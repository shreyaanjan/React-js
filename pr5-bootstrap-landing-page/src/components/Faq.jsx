import Image from "./Image";
import Title from "./Title"
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    let title = "Answer & Question";
    let desc = "Learning day desirous informed expenses material returned six the.She enabled invited exposed him another.Reasonably conviction solicitude me mr at discretion";
    let img = "/public/images/faq.png"
    return (
        <section className="faq-section">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <Image img={img} />
                    </div>
                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Do I need a business plan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    How long should a business plan be?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Visible can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    What goes into a business plan?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Correcting can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Where do I start?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lettering can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq