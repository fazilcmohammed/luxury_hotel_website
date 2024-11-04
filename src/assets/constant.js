import slidingImg1 from "./images/room_1_a.jpg";
import slidingImg2 from "./images/slider_1.jpg";
import slidingImg3 from "./images/slider_2.jpg";

import parking from "../assets/images/svg/parking.svg";
import internet from "../assets/images/svg/internet.svg";
import wifi from "../assets/images/svg/wifi.svg";
import elevators from "../assets/images/svg/elevator.svg";
import meeting_room from "../assets/images/svg/partners.svg";
import laundry from "../assets/images/svg/washing-machine.svg";

import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_3.jpg";

export const navLinks = [
  { id: 1, link: "Home" },
  { id: 2, link: "Rooms" },
  { id: 3, link: "Amenities" },
  { id: 4, link: "Gallery" },
  { id: 5, link: "About Us" },
  { id: 6, link: "Contact" },
];

export const slidingImages = [
  {
    id: 1,
    img: slidingImg1,
  },
  {
    id: 2,
    img: slidingImg2,
  },
  {
    id: 3,
    img: slidingImg3,
  },
];

export const amenities = [
  {
    id: 1,
    icon: parking,
    facility: "Free Self-Parking",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
  {
    id: 2,
    icon: internet,
    facility: "High speed Internet access",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
  {
    id: 3,
    icon: wifi,
    facility: "Complimentary WiFi in public areas",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
  {
    id: 4,
    icon: elevators,
    facility: "Elevators",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
  {
    id: 5,
    icon: meeting_room,
    facility: "Meeting rooms",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
  {
    id: 6,
    icon: laundry,
    facility: "Laundry and Valet service",
    details:
      "A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.",
  },
];

export const news_events = [
  {
    id: 1,
    img: img1,
    title: "How algorithms shape our world",
    date: "December 20, 2019",
    author: "Joefrey Mahusay",
    content:
      "A hotel is an establishment that provides paid lodging on a short-term basis.",
  },
  {
    id: 2,
    img: img2,
    title: "How algorithms shape our world",
    date: "December 20, 2019",
    author: "Joefrey Mahusay",
    content:
      "A hotel is an establishment that provides paid lodging on a short-term basis.",
  },
];
