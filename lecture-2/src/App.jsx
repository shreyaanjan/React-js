import Card from "./Card.jsx";
import Counter from "./Counter.jsx";

const App = () => {
  let aboutDesc = "This is something related to ABOUT Section !";
  let serviceDesc = "This is something related to SERVICES Section !";
  let contactDesc = "This is something related to CONTACT Section !";

  let aboutImg = "https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=612x612&w=0&k=20&c=Oc2HZUPVJRXFsjTwKVgWY_ddWrKeQUG0KCyKUGef-ig=";
  let serviceImg = "https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019821_640.jpg";
  let contactImg = "https://media.istockphoto.com/id/1452771551/vector/contact-us-button-with-cursor-pointer-click-vector-web-button.jpg?s=612x612&w=0&k=20&c=IGWQ-VhsNAnZyKnuWhggHhpozUiuFRq5jd-rJ7-KqIc="
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-4">
            <Card cardName="About" desc={aboutDesc} color="warning" img={aboutImg} />
          </div>
          <div className="col-4">
            <Card cardName="Services" desc={serviceDesc} color="success" img={serviceImg} />
          </div>
          <div className="col-4">
            <Card cardName="Contact" desc={contactDesc} color="primary" img={contactImg} />
          </div>
          <div className="mt-3">
            <Counter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;