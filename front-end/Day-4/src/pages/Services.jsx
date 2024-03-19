import { useNavigate } from "react-router-dom";
import "../assets/css/Services.css";


const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section
        className="innerpage_banner aboutusbanner"
        style={{
          backgroundImage:
            "url('https://images.homevents.in/event/birthday/birthday-2d78b49c-6e0f-4e34-a644-d63a88ad2207.jpg')",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-name-1">Birthday</h1>
          <span></span>
        </div>
      </section>
      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Decorations</span>
              </h2>
              <p>
                Exciting birthday decoration ideas and props from the best
                birthday event planner in Chennai. We make your birthday a
                unique event that is the talk of the town.{" "}
              </p>
            </div>
            <div className="services-container-1">
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/decorations/balloon-decorations/balloon-decorations-5db46366-d2f7-47a7-b6dd-c415d6e1b05a.jpg"
                      alt="Birthday-Balloon Decorations"
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Balloon Decorations</h4>
                  </div>
                </a>
              </div>
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/decorations/theme-decoration/theme-decoration-08bd24d6-1feb-495e-80d6-fc7439739add.jpg"
                      alt=""
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Theme Decoration</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Photography</span>
              </h2>
              <p>
                Capture the moments and turn them into priceless memories. Our
                Birthday photography packages include posed and candid
                photography and video coverage.{" "}
              </p>
            </div>
            <div className="services-container-1">
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/photography/traditional-candid/traditional-candid-88d6dcf6-f625-4442-a6ff-86df8dea4e52.jpg"
                      alt="Birthday-Balloon Decorations"
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Traditional + Candid</h4>
                  </div>
                </a>
              </div>
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/photography/traditional-candid-outdoor/traditional-candid-outdoor-1ebf4103-640b-4835-ae3f-bebb6beefb0a.jpg"
                      alt=""
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Traditional + Candid + Outdoor</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Cakes</span>
              </h2>
              <p>
                Order decadently delicious birthday cakes online. We deliver all
                sizes of custom birthday cakes to match the theme of the
                birthday party.{" "}
              </p>
            </div>
            <div className="services-container-1">
              <div className="single-decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img-fullwidth">
                    <img
                      src="https://images.homevents.in/service/cakes/theme-cakes/theme-cakes-034bca4c-5de3-45bc-8718-ac25c4113daf.jpg"
                      alt="Theme Cakes"
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Theme Cakes</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday Return
                <span> Gifts</span>
              </h2>
              <p>Curated birthday gift ideas for everyone. </p>
            </div>
            <div className="services-container-1">
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-635a11b0-b498-4602-9237-fd14e44c6c00.jpg"
                      alt="Birthday-Balloon Decorations"
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Kids Return Gift</h4>
                  </div>
                </a>
              </div>
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/return-gifts/flowers-and-plants/flowers-and-plants-c72146f7-23d7-4f37-9f0f-768001155f73.jpg"
                      alt=""
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Flowers and Plants</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Entertainment</span>
              </h2>
              <p>
                Keep your guests vibing and happy with birthday party
                entertainment for adults and kids. Make your birthday party an
                experience that will last a lifetime.{" "}
              </p>
            </div>
            <div className="services-container-1">
              <div className="decor-items-container">
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/entertainment/sound-and-lighting/sound-and-lighting-a1951772-0cdd-48a0-b90e-29595131d116.jpg"
                        alt="Birthday-Balloon Decorations"
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Sound and Lighting</h4>
                    </div>
                  </a>
                </div>
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/entertainment/games/games-340a2908-cb43-40c2-8eac-3269de66087f.jpg"
                        alt=""
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Games</h4>
                    </div>
                  </a>
                </div>
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/entertainment/games/games-340a2908-cb43-40c2-8eac-3269de66087f.jpg"
                        alt=""
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Caricature</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Venue</span>
              </h2>
              <p>
                Book a festive banquet hall with food that caters to guests of
                all ages. Choose from a variety of venues with outdoor spaces
                and hotels to bring life to your birthday party.{" "}
              </p>
            </div>
            <div className="services-container-1">
              <div className="decor-items-container">
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/venues/party-hall/party-hall-2530867a-2cbf-4645-a5cd-53ab60f23407.jpg"
                        alt="Birthday-Balloon Decorations"
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Party Hall</h4>
                    </div>
                  </a>
                </div>
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/venues/banquet-hall/banquet-hall-a59c1c77-5ff8-46bb-b078-8ddf43a6e9f9.jpg"
                        alt=""
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Banquet Hall</h4>
                    </div>
                  </a>
                </div>
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/venues/mandapam/mandapam-f8ef5d46-f85a-448c-a42e-e06548b4d27d.jpg"
                        alt=""
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Mandapam</h4>
                    </div>
                  </a>
                </div>
                <div className="decor-item">
                  <a onClick={() => navigate("/pro")}>
                    <div className="decor-img">
                      <img
                        src="https://images.homevents.in/service/venues/banquet-hall/banquet-hall-a59c1c77-5ff8-46bb-b078-8ddf43a6e9f9.jpg"
                        alt=""
                      />
                    </div>
                    <div className="decor-cont">
                      <h4>Resort</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-section decpage-section padding-contain">
        <div className="container">
          <div className="photography-incontainer decor-incontainer">
            <div className="secheader animated fadeInDown">
              <h2 className="sec_head">
                Birthday
                <span> Food</span>
              </h2>
              <p>
                Delicious food options curated by our expert chefs to elevate
                your birthday celebration in Chennai. From mouth-watering
                appetizers to delectable main courses and irresistible desserts,
                we ensure a culinary experience that delights your taste buds
                and leaves your guests craving for more.
              </p>
            </div>
            <div className="services-container-1">
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/food/vegetarian/vegetarian-28341b6f-0364-452d-940b-51a720ccc0bb.jpg"
                      alt="Birthday-Balloon Decorations"
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Vegetarian</h4>
                  </div>
                </a>
              </div>
              <div className="decor-item">
                <a onClick={() => navigate("/pro")}>
                  <div className="decor-img">
                    <img
                      src="https://images.homevents.in/service/food/non-vegetarian/non-vegetarian-005cc782-757d-46ed-8ddf-3518b95b076d.jpg"
                      alt=""
                    />
                  </div>
                  <div className="decor-cont">
                    <h4>Non-Vegetarian</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
