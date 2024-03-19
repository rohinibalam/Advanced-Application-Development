import "../assets/css/Home.css";
import { Pagination } from "swiper/modules";
import Counter from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://images.homevents.in/service/decorations/balloon-decoration-at-home/balloon-decoration-at-home-4b50e29f-1807-4cae-870f-65ba08173685.jpg",
      name: "Birthday Decorations",
      mrp: "₹6999",
    },
    {
      id: 2,
      imageUrl:
        "https://images.homevents.in/service/decorations/simple-balloon-decorations/simple-balloon-decorations-4f99679f-0f07-40e2-9126-9e397efc240e.jpg",
      name: "Balloon Decoration",
      mrp: "₹11599",
    },
    {
      id: 3,
      imageUrl:
        "https://images.homevents.in/service/decorations/boss-baby-theme/boss-baby-theme-ae0b4ff6-0b5d-4685-a9e0-5cd4a4ef0d24.jpg",
      name: "Boss Baby Theme",
      mrp: "₹11249",
    },
  ];
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "John Doe",
      description:
        "Homevents made my daughter's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 2,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 3,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
    {
      id: 4,
      image:
        "https://images.homevents.in/testimonial/testimonial-4283df2c-872a-41da-a835-fca8f5c5ee9d.jpg",
      title: "Jane Doe",
      description:
        "Homevents made my son's birthday party unforgettable. The decorations were amazing!",
    },
  ];

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".show-wrapper");
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealTop < windowheight - revealpoint) {
          reveals[i].classList.add("active-wrapper");
        } else {
          reveals[i].classList.remove("active-wrapper");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {/* <div>
        <button className="com_quickenquiry">Quick Enquiry</button>
      </div> */}
      <div>
        <div className="secheader animated fadeInDown ">
          <h7 className="sec_head">
            How It <strong>Works ?</strong>
            <p>
              Get birthday event experts on board in 3 easy steps to get your
              celebration mode on!
            </p>
          </h7>
        </div>
        <div className="hitwork-list">
          <div className="hitwork-item">
            <div className="border-img">
              <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon2.png"
                alt="side"
              />
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://images-stg.homevents.in/assets/hitwork-icon1.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4>Plan your Event</h4>
                <p>
                  Send us your event details and we will plan everything to
                  perfection to your preferences
                </p>
              </div>
            </a>
          </div>
          <div className="hitwork-item">
            <div className="border-img">
              <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon3.png"
                alt="side"
              />
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://images-stg.homevents.in/assets/hitwork-icon2.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4>Get a Quote</h4>
                <p>
                  Get a transparent and comprehensive quote of all anticipated
                  expenses and miscellaneous
                </p>
              </div>
            </a>
          </div>
          <div className="hitwork-item">
            <div className="border-img">
              <img
                src="https://images-stg.homevents.in/assets/howitwork-sec-be-icon1.png"
                alt="side"
              />
            </div>
            <a href="">
              <div className="hitwork-img">
                <img
                  src="https://images-stg.homevents.in/assets/hitwork-icon3.png"
                  alt="Birthday Decorations"
                />
              </div>
              <div className="hitwork-cont">
                <h4>Celebrate your Events</h4>
                <p>
                  Sit back and celebrate your event with loved ones as Homevents
                  takes care of everything else
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="show-wrapper">
        <div className="secheader animated fadeInDown">
          <h7 className="sec_head">
            Decoration By <strong>Birthdays</strong>
            <p>
              Crafting unforgettable birthdays, blending traditional charm with
              contemporary elegance.
            </p>
          </h7>
        </div>
        <div className="slick-track">
          <div className="flex justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[25rem] mx-3 border"
              >
                <div className="h-[13rem] w-[20rem] hover:scale-125 transition-all duration-500 ">
                  <img
                    className="object-cover object-top w-full h-full"
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xl text-gray-500">{product.mrp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="view-all-button-container">
          <button onClick={() => navigate("/pro")} className="view-all-button">
            View All
          </button>
        </div>
      </div>
      <div className="img-occ-back show-wrapper">
        <div className="secheader animated fadeInDown">
          <h7 className="sec_head">
            Return Gifts For all <strong>Occassions</strong>
            <p className="p-small">
              We&lsquo;ve got you covered for any gift-giving need! From useful
              to beautiful, find unique gifts for individuals or groups.
            </p>
          </h7>
        </div>
        <div className="giftoccas-lists">
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img ">
                <img
                  src="https://images.homevents.in/service/return-gifts/flowers-and-plants/flowers-and-plants-015c613c-5af8-4d61-bb66-a4b3ab02152d.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/flowers-and-plants/flowers-and-plants-61bd85b0-3c7b-4c88-87b4-c6046004e6f4.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-5ce54c1b-84d0-4a7b-8941-a977c7c740e7.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-78b188e4-8315-45f0-b526-c3d598ceadc3.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-e801b91f-d32c-40ee-b5ec-d6469b57e299.jpeg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-1621c7e1-62cd-4bd7-bf9e-040dfe10bc90.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
          <div className="giftoccas-item">
            <a href="">
              <div className="giftoccas-img">
                <img
                  src="https://images.homevents.in/service/return-gifts/kids-return-gift/kids-return-gift-63df6f76-3c0d-476f-af53-f26c1cc0ca03.jpg"
                  alt=""
                  className="hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="giftoccas-cont">
                <h5>Birthday Return Gifts</h5>
                <h6>
                  From{" "}
                  <strong>
                    <span>₹</span>
                    99
                  </strong>{" "}
                  Onwords
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="show-wrapper">
        <section className="whyhomevents">
          <div className="container-fuild">
            <div className="whyhomevents-confuld">
              <div className="whyh-left">
                <div className="secheader animated fadeInDown">
                  <h5>Why Homevents</h5>
                  <h2 className="sec_head">As a Professional Event Planner</h2>
                  <p>
                    we know what you expect and work towards exceeding it.
                    Events are labour and cost intensive and our experts help
                    you set the budget and stick to it while putting together
                    events that will dazzle your guests. We are partnered with
                    reputed caterers, venues, and other party service providers
                    that make the task of finalizing vendors a breeze. Most of
                    all, we plan and execute the event like it is our own, and
                    leave you to fully indulge in your day and make it your own.{" "}
                  </p>
                  <button onClick={() => navigate("/about")}>Know More</button>
                </div>
              </div>
              <div className="whyh-right">
                <img
                  src="https://images.homevents.in/card/card-98c78eb2-98d8-47e6-9f7b-9310d4bfb85e.jpg"
                  alt="Birthday Decorations"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="show-wrapper">
        <div className="container">
          <div className="home-count">
            <div className="hcount-item">
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="200">
                    <Counter finalCount={200} />
                  </span>
                  <sub>+</sub>
                </h3>
                <h6>Event partners</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="5">
                    <Counter finalCount={5} />
                  </span>
                  <span>K</span>
                  <sub>+</sub>
                </h3>
                <h6>Happy Customers</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="1">
                    <Counter finalCount={1} />
                  </span>
                  <span>L</span>
                  <sub>+</sub>
                </h3>
                <h6>Themes</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="3">
                    <Counter finalCount={3} />
                  </span>
                  <span>K</span>
                  <sub>+</sub>
                </h3>
                <h6>Successful Events</h6>
              </div>
              <div className="hcountlist">
                <h3>
                  <span className="counter" data-count="100">
                    <Counter finalCount={100} />
                  </span>
                  <sub>+</sub>
                </h3>
                <h6>Weddings Planned</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="show-wrapper">
        <div className="secheader animated fadeInDown ">
          <h7 className="sec_head">
            What Our <strong>Clients Say</strong>
            <p>
              We take pride in creating the event and space for our client’s
              joyful moments. Here’s our clients telling why we are the best
              event organisers in the city.
            </p>
          </h7>
        </div>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="testimonial_container"
        >
          {testimonials.map(({ id, image, title, description }) => (
            <SwiperSlide className="testimonial_card" key={id}>
              <img src={image} alt={title} className="testimonial_img" />
              <h3 className="testimonial_name">{title}</h3>
              <p className="testimonial_description">{description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
