import prop2 from "../assets/images/images/prop2.webp";
import prop1 from "../assets/images/images/prop1.webp";
import prop3 from "../assets/images/images/prop3.webp";
import prop4 from "../assets/images/images/prop4.webp";
import prop5 from "../assets/images/images/prop5.webp";
import prop6 from "../assets/images/images/prop6.webp";
import client1 from "../assets/images/images/client1.png";
import client2 from "../assets/images/images/client2.png";
import client3 from "../assets/images/images/client3.png";
import client4 from "../assets/images/images/client4.png";
import client5 from "../assets/images/images/client5.png";
import client6 from "../assets/images/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import { FaHome, FaSearch, FaNotesMedical, FaCameraRetro, FaMoon, FaSun, FaHeart, FaMoneyBill, FaUser } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FaHouseChimney, FaPerson } from "react-icons/fa6";
import MyAgent from "../dashpages/MyAgent";
import Wishlist from "../dashpages/Wishlist";
import Profile from "../dashpages/Profile";
import AboutUs from "../container/AboutUs";
import Home from "../pages/Home";
import BAA from "../container/BAA";
import Login from "../container/Login";
import ContactUs from "../container/ContactUs";
export const property = [
  {
    images: prop1,
    address: "6Downtown, Las Vegas",
    name: "Villa with Amazing View",
    price: "$ 213.23",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "250 sq ft",
    owner: "Alice adams",
  },
  {
    images: prop2,
    address: "Meadows Village, Las Vegas",
    name: "Townhouse for Sale",
    price: "$ 345.18",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Drew Alice",
  },
  {
    images: prop3,
    address: "49 DC townhall alex",
    name: "Duplex sea facing for rent",
    price: "$ 652.18",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "129 sq ft",
    owner: "Fursi Bam",
  },
  {
    images: prop4,
    address: "Underground street 20 texax",
    name: "Villa with Side View",
    price: "$ 876.13",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "453 sq ft",
    owner: "Neon Alice",
  },
  {
    images: prop5,
    address: "Rubari London Hills",
    name: "Awesome villa for rent",
    price: "$ 341.83",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Firari Alice",
  },
  {
    images: prop6,
    address: "Northean fersh alice",
    name: "Street Farm for sale",
    price: "$ 675.23",
    about:
      "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
    bed: 4,
    bath: 3,
    area: "340 sq ft",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const agent = [
  {
    image: client1,
    name: "Dana Gilmore",
    text: "Rents houses out",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client2,
    name: "Ana Anderson",
    text: "Very good work",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client3,
    name: "Albert adame",
    text: "Very well",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client4,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client5,
    name: "Alex gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client6,
    name: "Sivay Ashbi",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
];

export const navItem = [
  // {
  //   link: 'Home', path:'/',component:Home
  // },
  
  {
    link: 'About', path:'about',component:AboutUs
  },
  {
    link: 'Contact Us', path:'contact',component:ContactUs
  },
  {
    link: 'Book an Appointment', path:'bookaa',component:BAA
  },
  {
    link: 'Login', path:'login',component:Login
  },
]

export const dashItem = [
  {
    link: 'Profile', path:'profile',icon:FaUser,component:Profile
  },
  {
    link: 'Wishlist', path:'wish',icon:FaHeart,component:Wishlist
  },
  {
    link: 'My Agents', path:'myagent',icon:FaPerson,component: MyAgent
  },
]

export const profItem = [
  {
    edit:"Full Name",type:"text"
  },
  {
  edit:"Date of Birth", type:"date"
  },
  
  {
   edit:"Country/Region", type:"text"
  },
  {
    edit:"Adress", type:"text"
  },
  
  {
    edit: 'Password',type:"password"
  },
]
