import { useEffect, useState } from "react";
import "../assets/css/Admini.css";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ManageThemesPage from "./ManageThemesPage";
import Counter from "./Counter";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleManageThemesClick = () => {
    setCurrentPage("manageThemes");
  };
  useEffect(() => {
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    // Menu Toggle
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function () {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };
  }, []);
  const customers = [
    {
      id: 1,
      name: "John Doe",
      country: "Chennai",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg",
    },
    {
      id: 2,
      name: "Alice Smith",
      country: "Coimbatore",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-3c30c081-2786-454f-a959-95e1dfa8e823.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      country: "Madurai",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg",
    },
    {
      id: 4,
      name: "Emma Wilson",
      country: "Tiruchirappalli",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-3c30c081-2786-454f-a959-95e1dfa8e823.jpg",
    },
    {
      id: 5,
      name: "William Brown",
      country: "Tirunelveli",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg",
    },
    {
      id: 6,
      name: "Sophia Garcia",
      country: "Salem",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-3c30c081-2786-454f-a959-95e1dfa8e823.jpg",
    },
    {
      id: 7,
      name: "Daniel Lee",
      country: "Erode",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      country: "Tiruppur",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-3c30c081-2786-454f-a959-95e1dfa8e823.jpg",
    },
    {
      id: 9,
      name: "James Taylor",
      country: "Vellore",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg",
    },
    {
      id: 10,
      name: "Isabella Anderson",
      country: "Kanyakumari",
      imageUrl:
        "https://images.homevents.in/testimonial/testimonial-3c30c081-2786-454f-a959-95e1dfa8e823.jpg",
    },
  ];

  const orders = [
    {
      id: 1,
      name: "Birthday Cake",
      price: "$50",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: 2,
      name: "Party Decorations",
      price: "$100",
      payment: "Due",
      status: "Pending",
    },
    {
      id: 3,
      name: "Balloons",
      price: "$20",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: 4,
      name: "Gifts",
      price: "$80",
      payment: "Due",
      status: "Pending",
    },
    {
      id: 5,
      name: "Streamers",
      price: "$15",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: 6,
      name: "Party Hats",
      price: "$10",
      payment: "Due",
      status: "Pending",
    },
    {
      id: 7,
      name: "Candles",
      price: "$5",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: 8,
      name: "Party Favors",
      price: "$30",
      payment: "Due",
      status: "Pending",
    },
    {
      id: 9,
      name: "Cake Topper",
      price: "$8",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: 10,
      name: "Tablecloth",
      price: "$25",
      payment: "Due",
      status: "Pending",
    },
  ];

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Brand Name</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title"> Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon"></span>
              <span className="title">Manage Themes</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Manage Menu</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Manage Add-ons</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">View Bookings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Customer Reviews</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="icon"></span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <div className="toggle"></div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
            </label>
          </div>
          <div className="user">
            <img
              src="https://images.homevents.in/testimonial/testimonial-fbd21356-8183-4f18-be2e-141fd06a63ce.jpg"
              alt=""
            />
          </div>
        </div>

        {/* Cards */}
        <div className="cardBox">
          <div class="card">
            <div>
              <div class="numbers">
                <Counter finalCount={1504} />
              </div>
              <div class="cardName">Daily Views</div>
            </div>

            <div class="iconBx">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
          </div>

          <div class="card">
            <div>
              <div class="numbers">
                <Counter finalCount={80} />
              </div>
              <div class="cardName">Sales</div>
            </div>

            <div class="iconBx">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>

          <div class="card">
            <div>
              <div class="numbers">
                <Counter finalCount={284} />
              </div>
              <div class="cardName">Comments</div>
            </div>

            <div class="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>

          <div class="card">
            <div>
              <div class="numbers">
                ₹ <Counter finalCount={7500} />
              </div>
              <div class="cardName">Earning</div>
            </div>

            <div class="iconBx">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </div>
        </div>

        {/* Order Details List */}
        <div className="details">
          {/* Recent Orders */}
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" className="btn">
                View All
              </a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
                    <td>{order.payment}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Customers */}
          <div className="recentCustomers">
            <div class="cardHeader">
              <h2>Recent Customers</h2>
            </div>

            <table>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td width="60px">
                      <div class="imgBx">
                        <img src={customer.imageUrl} alt="" />
                      </div>
                    </td>
                    <td>
                      <h4>
                        {customer.name} <br /> <span>{customer.country}</span>
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
