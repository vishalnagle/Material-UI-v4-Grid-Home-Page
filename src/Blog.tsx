import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
// Form components
import CardPayment from "./Form/CardPayment";
import Home from "./Form/Home";
import Hotelmgmt from "./Form/Hotelmgmt";
import JobApp from "./Form/JobApp";
import Mui from "./Form/Mui";
import Prof from "./Form/Prof";
import Profile from "./Form/Profile";


const sections = [
  { title: "Technology", url: "https://en.wikipedia.org/wiki/Technology" },
  { title: "Design", url: "https://en.wikipedia.org/wiki/Design_technology" },
  {
    title: "Culture",
    url: "https://study.com/learn/lesson/technology-culture-overview-impact-examples.html",
  },
  { title: "Business", url: "https://www.sofigate.com/" },
  {
    title: "Politics",
    url: "https://en.wikipedia.org/wiki/Politics_and_technology",
  },
  {
    title: "Opinion",
    url: "https://www.nytimes.com/international/section/opinion/technology",
  },
  {
    title: "Science",
    url: "https://www.tutorialspoint.com/fundamentals_of_science_and_technology/fundamentals_of_science_and_technology_introduction.htm",
  },
  { title: "Health", url: "https://en.wikipedia.org/wiki/Health_technology" },
  {
    title: "Style",
    url: "https://www.tg3ds.com/blog/what-is-fashion-technology",
  },
  { title: "Travel", url: "https://en.wikipedia.org/wiki/Travel_technology" },
  {
    title: "Featured",
    url: "https://www.techtransfer.nih.gov/licensing/featured-technologies",
  },
  { title: "Life", url: "https://en.wikipedia.org/wiki/Life_Technologies" },
  { title: "Wellbeing", url: "https://wellbeing.google/" },
  {
    title: "Interest",
    url: "https://en.wikipedia.org/wiki/Public_interest_technology",
  },
];

const mainFeaturedTech = {
  title: "Technology",
  description:
    "The application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Technology",
    date: "July 03",
    description:
      "This is a wider card with Technology is the application of knowledge for achieving practical goals in a reproducible way.",
    image:
      "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1688647073~exp=1688647673~hmac=824adaeefdb8c0b57a8797bcafd3553f8e7eb8f14da7ded2e026d2c30b6700aa",
    imageLabel: "Image Text",
  },
  {
    title: "Design Technology",
    date: "July 06",
    description:
      "Design technology, or D.T., is the study, design, development, application, implementation, support and management of computer and non-computer.",
    image:
      "https://cdn.pixabay.com/photo/2017/12/29/14/14/sketch-3047721_640.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Technology Affects Culture",
    date: "July 03",
    description:
      "How Technology Affects Culture at Local and Global Levels,Socialization can be seen as the process that makes us 'act human'.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHJ6GXjVz8_KxS08hlmiz-7-d4miX0ImXOA&usqp=CAU",
    imageLabel: "Image Text",
  },
  {
    title: "Business is Technology",
    date: "July 06",
    description:
      "Business is technology,and technology is about people.We create sustainable transformation through business technology.",
    image:
      "https://img.freepik.com/free-photo/light-trails-buildings_1359-715.jpg?size=626&ext=jpg&ga=GA1.1.2147086141.1688647057&semt=sph",
    imageLabel: "Image Text",
  },
  {
    title: "Politics and technology",
    date: "July 03",
    description:
      "Politics and technology encompasses concepts, mechanisms, personalities, efforts, and social movements ",
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/5/22/1400774733025/Andrew-Park-politics-001.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=5fd14bc009693d3014a35d4c705bc7c6",
    imageLabel: "Image Text",
  },
  {
    title: "Opinion | Technology",
    date: "July 03",
    description:
      "Sharp analysis and forceful arguments about how innovation is changing our behavior, culture and society.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhRux2PPTQcNwoUyKqayTwR6rv0JsbrRStA&usqp=CAU",
    imageLabel: "Image Text",
  },
  {
    title: "Science : Branch of knowledge",
    date: "July 06",
    description:
      "The evolution of science is like a boon to the world, as human beings come to know alot world.",
    image:
      "https://www.tutorialspoint.com/fundamentals_of_science_and_technology/images/evolution_of_science.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Health technology",
    date: "July 06",
    description:
      "Health technology is defined by the World Health Organization as the application of organized.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIR7HLgHWgJUBtz87PqMJc9bfYG7i6ho9tpg&usqp=CAU",
    imageLabel: "Image Text",
  },
  {
    title: "Style",
    date: "July 03",
    description:
      "Fashion technology is the term used for incorporating technological advancements into the manufacturing and selling of fashion products.",
    image:
      "data:image/jpeg;base64,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",
    imageLabel: "Image Text",
  },
  {
    title: "Travel technology ",
    date: "July 06",
    description:
      "Travel technology (also called tourism technology, and hospitality automation) is the application of Information Technology (IT).",
    image:
      "https://www.forbesindia.com/media/images/2017/Mar/img_94961_travel.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Featured-technologies",
    date: "July 06",
    description:
      "Recently viewed content let you easily return to recently viewed content. You can remove any you no longer are interested in.    ",
    image:
      "https://media.istockphoto.com/id/1218511457/photo/top-view-asian-ux-developer-and-ui-designer-brainstorming-about-mobile-app-interface.jpg?s=1024x1024&w=is&k=20&c=zDxgOZjClVf3A_g0olN48tolDdGlaSHGzrFK2tddtAE=",
    imageLabel: "Image Text",
  },
  {
    title: "Life Technologies",
    date: "July 06",
    description:
      "Life Technologies Corporation was a biotech company founded in November 2008 through a US $6.7billion merger of Invitrogen Corporation.",
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_640.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Digital Wellbeing",
    date: "July 06",
    description: "Find a balance with technology that feels right for you",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUXFRUXFxYVFRUXFhUWFhUXFxUWFxgYHSggGBolHRcVITIhJSkuLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABDEAACAQIEAwUFBQYEBQUBAAABAgADEQQSITEFQVEGE2FxkSIyQoGhUnKxwdEHFCNigpIzouHwQ1Njc7IVJKOz8TT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAMxEAAgEDAQUHAwQCAwEAAAAAAAECAxEhMQQSQVHwBRNhcYGRoSKx0RQyweEj8RUkUgb/2gAMAwEAAhEDEQA/APcYQhAAhCEACEIQAIkWJAAhCJeSQLGMbak2H0nPjcYEHVuQ/MyjrYhnN2N/98hKSmkLnVUS+bHUx8Y+Wv4RUxlM7OPw/GZ2NZgNSbDxlO8YrvnyNTeLeZmlXZfdJH4eks8LxQE2fTx5fPpLxmmXjWi9S0vCNvFl7DhRFjYsAHQiQEgkWEIQAIQhAAhCEACEIQAIQhAAhIqlULa5AubC/M2JsPkD6RmIxKoubfpbnfa0CG7EruALkgDxnDV4qg2BP0EqsRiGc3Y/LkPKQswAuTYDUk7AdTEuryM8qz4Ft/6x/J/m/wBJInFk5qR6GebvxjGY0v8AuCqlBSV/eHIDVWG/dXVsqi/vFTfwlZjKOIoHNWrYylf/AIwxBq0QTyIN1TbdkA8dYudaUODfkh9CnOo7b8U+Unb+Le7uewDiVL7X0P6SHEcVUD2dT46CYPgPG6pqDD4kgswJpVlGVattSjLstQDXTRhcjYiaFmtLRrb0d6Ogut3tKbpzVmPqVCxuTc84kjpVAwzKbg/lFvKrOTLK6dnrxOLjvFBhqJqkX1AAvYZjtc8hz+Uw9PiX73SapWRnIbULcL0DUgW9n2T1uLne+un7SVrutM+6qd41+ZJKp6Zan06SlGFqYhHVaRKbFkdVYkEEqA4Ck8jrbcX3t19jpwp0+9nbN0r58uaWVy+LnP2ipKc+6gndWbadvxfFuPHRjsJxapRpnuaq1KaKABW1VRYBctZdTboc19riX3BO0ArEU6iGnVIY5bhlbLvkdbg6EGx1152vMTT4VkBQZyCWFQFGBFgwAK2Kmpma93sNAdpe9ksEWru7MT3JVQTqSzUl0J5kK1z1JXpI2qhTUd+1vLT+Vpy8XnhahUlvbu9veas/4488nomA4jYZX25H8jF4xxN6ao1Gn3t2toeoNgANb89uRlXeKrkag28pzXJ2sb+9lu2NSjXF4t5m1xlQfGfW/wCMDjKh+M+tvwjd9De/XI0haItUHYg+REy7OTuSfMwBlHU8A/UeBrYTPUOJVF55h4/rLfCYtag03G46SykmOjUUsHVCRmoAQCRc3sOtt7SSWGBCEIAEIQgAQhCAFRx3hP7ygQuyjMpIB0sDqdt7XtynJjKmoQWsgC6CwvaxIHKXtZ8qk9AT6CZm8TUSXqZqySd1q/40FmY7dYm1FaXwvnaoObUaSZmXyZjTU+BaaaZftpQLBLfFTxFIfeqIrD/6zM9ZuNOTXLr4uX2GEZ7TTjLRvr30LzhODFGjTpD4VAOlrsdXNupYk/OdLqCCCAQRYgi4IO4I5iRYHECpTSoNnRW/uUH85KY61jJvN5ZgjSSjUrYcEslEq6WBLUx760xbUlDaxHKw3Bndw7G4lTnzPVS12o1VBq5R7xpMtjntrka+bYEG16bGuaeNrA/FVK3Nx7ZYVqAv9lgzrfa4A8JdI5BDKbEEEHmCNRORVrOhWbWl7tcPHHiewo7JDatlgqmXuqztlcddcf7zc0uGqI6K9MgowDKU2KkXBHgbyUSm4B7LYqkBZKeLqBOih1SqyD7r1HHhtylxedpRVjx1S8ZOLfE4uIcKSswZi4NspyNlzLqQCbXFiSQQQdTrOqhSVFVEUKqgAAaAAbCOheXu7WYoy/HWWjXdnIVKiq9zzdBkqgeOUUjbc3MuOzmGanQXOLO96rg7hnN8p+6Mq/0id5sdxexvr16xwMbOtKVONN6K4uNOMZymtXb4/I68ixOJSmpeo6oo3ZiABfQamSXlPxrCmpWwoYju2qikwNtO8ZLnXqi1qXlXMRY0QSlJI7MPiqzp3q0MyNYoFdRVKE2DlHyquvLNcXW410cvEqeYU2Jp1DtTqqabtbfKHAz+a3E0eNwxD5lFwxNx42sw8mXT7wE6BSSoho1VWottnUMHU7Eq255Hx842VONk0OjSTbi8FBeLeddfsqF//mrPR6I38Wj/AGMcyjwRlHhOCtRxNEE1aOdQL58PeppoNaRs4OpNlz6DflFOBEqM1pklE6+GPaovjofT/wDJXYbEJUUMjBlN9QbjQ2I8CCCCOVp3YI2qL94Si1KRdpI7MVwc1MQlfvWGS3sAtYnXN8Wlxl0HTW8uowR0copXtxN0YpXa4iwhCSXCEIQAIQhADnxovTb7p/CZyalhMxiKWRivT8ORi6iM1daMZMl+0LEhaeHp6g1K+6mxCrTfPY+IOXce9NXMf+0PBu60aie8jnITsKhylATyDBWTzZYmeIsNjs9ognzXXroYn9/pLXFJL0XFstamQtmN2VSBoy6gWNwbkWnpnZXjRxVEmoAtamxp1QAQMwFwyg65WUggcr25TzLHcNXGZalN8tS9mDfDa/ssN1YEH9Nps+wlG9XFVhop7mlpsXQMzn5d4q+YaJoSzuq+mU+Dv/J1+1qP+J1ZJardaxvJrTH/AJX8lj2n4Aa5FSnlz5cjq5IWol7qMwuVZTqrW5keI4uG4PiIspakoU6VairVqqP5CpsT0Jta97EzVGIZpdCEndo41PtCvTp93F48ljr/AEc2AwaUaYp0wbC5uSSWZiWZmJ1LEkknxlZ2q7S0sDSzvdna4p0wdXI3ueSi4ufHnLyeF/tC4ia2OrXPs0z3SDoE0b1bMfnHSdkIoU+9qZ82JxLtzj6zEiu1JeSUvYC/P3j8zJOEdusbRqBnrNWT4qdTUEc7MdVPj9DMuLnQegnbS4TWb4CPMgfjEudstnVVCDVt346Z6bgv2q4diBVoVU8VK1APP3T6Ca3g3HsNigTQqq9tSuodfNTqB42nglbhVZRcpp4EH8JFg8XUouKlJyjqbhlNiP1Hhzkxqb2dTPU2GPC6fj/Z9Jzm4jhO9plMxU6FXG6OpDU3HirBT8pS9iO0wx1DMwC1UIWoo2uR7Lr4EcuRBE0Ubqc570JWeqKDBftIxFJTSxWGWpUQlWdH7u5U2uUKkA6XuDY6EAS34P8AtBoYiqlOrTbDuzBUZmV6bFtO7LCxUtpa4te2t7A0faLs0azGtRIFQgZlb3alhYG/wsBYXtYgAHqMbjaBRjSrIVY39lx7w5leTjxF5vo0qFWNk7S8/wAjv1E/NH0LVxCKQGYAkEi5A0G+/nOHtDxVcLhquIOuRCVUbu50povUsxVQPGePYTtPiUUI4XEKqMimq1RayKxBIWupv8I1IJ8eUOKdrcXVq0q7d0q4dhUpYca0cyrYGoxALNYmxAAW9wLi8U9jrXa3TT+ppcy9/Z7XdqFTvGLP37lyb3L1FWpUNjt7bPpy1mqUymwOLoVKqYmghVMdTaowOmTEUCFqqwvo5Da20JpMecuBMM2m3ZWM1SLjJ3NNha4dQw+fgec6BM5gMX3beB3H5zQIwIuNoyMro10p7yJIRIskaEIQgARDFiGACSu4phcwzDcfUSwMQyWroXJJqzMoWEixFJXUo6hlYEMrC4IO4IO8sOLUFD3A318jtcThv+P5RGjsYZRszM4nsVhajhmNTxF01APutUy94R5tNBQopTUJTVVRRZVUAKAOQA2kpjTLRiksFalWdTMm35shrYtUIViQTa3jc2ks56+ERyGIuQeetwAdNeWsm8paKld39BF2c/EsctClUrP7tNGY+Nhew8TtPnrFYipiKrVH9qpUck26sdh4cp7t2uw/eYLEoN+4cjzUZh+E8W7O0ruz2vlXTzbQfnKVpbqudTs6Kd+d17Fvwzhq0h1c7n8h4Tvka0+Z1PXl8hyjma34fpONJuTu8s9DFKKslZDpW8U4WtQEqAH/AB8D+sspFVpke0pN+hJs3h4eYkwk4u6YTipKzXXh4nF+zfiRw+PRSbLV/hMD1P8Ah/PNYf1Ge3zwzh2FD8Tw1tM1WjU6e6wc/wDiZ7iJ2aT3o3PMbfFRqeg4SHGYSnVXJVpq69HUML9ddj4yaF5cyIztfsVh29x61PwV8w/+QMR8jOOl2U7rKe7asykEOXpsCRzalUyqOulyORmwBiiW76ejd1yd2X1KrgWCqKoNcKHWpiHFjfWvUzNtoNFX5lusuYgiEXiJF2955HW8xtLjgtXQr01Hhff/AH4ylbT52HOW/BUNmPPYX8N/xErC+8aKf7ky3EUTnYOSLEAc97k3G2ugIvOgTRc1CwhCACRpimNMkqwJkbm0klTxbFfAD979IN2Fzkoq7K/GV87E8th5Tna28q+LdpMNQJVnzP8A8unZmv0PJTt7xEq04zjsQbYfDLTX7dctoOpHs2HiM0pGnOeUjFLmzSEyLEV0QZnZVHVmCj1MrB2axLKXxePqqD7qUAtI/wB1rhfMXMpOM8FwmHptUFM1KrWSmaju7vUbRd2666chNEKDd3fCFy3U0nq+X92NXhcXTqrmpOrrcjMjBhcbi4k0r+B8P/d6K0ybta7nq594jw5DwAneZWwt24HHxfFrSo1HcZlC7D4s3shfmSB8547wjBd0WAcMCBY9Ct7g+onsHGcF31CpSG7Kct9sw1QnwzATyjEHK4Ygqb5GU7hr2KnxH6zDtu9hcGn7nZ7J3bSfFNe2n3Hk33J+RK+loguQVFzqRme3LoBvaSVKZt7NgfEXH0jgzc19CPztObvYwdxpETZj7LeqXGnj0+RkaqAfZuvlsfMHT850Zm5Lb7xH5XvCnStubnrYD5C3KSpWRCimxmEZqeKXErkui2XOCQWIYE2BGwPXnPVeB4816CVSACwNwNsysUa1+V1M8rwOFZ6lkGZ2YhB0ud/AXDEnoJ6vw3CCjSSkDcIoF+p5n5m5+c6Oyb2eSS6/Jwu1VTW67fU2/bx5Z0OwTnxuJFNcxBPkPxPKTAxWW+/+7bTVJO2NTkaiUKuZQwBAIuL225bSUGMUR8rYuhwiiNEcJRl0LeaXB0sqBfDXzO8zTKDuAfPw2mooEZQRsdfXW5k09Wa9nS9R4Gt+ccBARY00hCEIAIY0xxiWgBzY2vkUnnsPOedduOOPQpilRP8A7iscqW3UE2Z/PWw8T4TWcbxyjM7GyUwST0A1Y/T6TAdlMG+PxVTH1B/DQ5aebRVUe7c9ADfTcm4tY2iEe8nnRGOpO7us20Ljs1wEUaaooux95wLtUf4rE6n5nTnvroWZKI5F7+YUjp9o+J0HLoUxGKVBkS9zu2xYdAB7ieG5+pzfFOOUKP8Ai1Bm+yNW8AFG30E6dt5fViJznLcl9P1Ter166tzLOvXZzcmUnC0/ecQ2JOtOkWp0RyLbVavr7I8jKDifa16ilKNIoGFs9VrNY6EhRcqfEzu4X2spUkWk+HqU1UAA0/4y2HWwD3/pkbRvONop28umTTpyV5S1fivV9eJr4s4uG8WoYgfwaqP1APtD7yH2l+YndMBLTWGJaU3HeDUKysXpg1GGVWGjZjomo3sddb2sZdTnxNImxW2ZTcA7HQqQemhOvLx2hqrExbi7pnmvEME9CoadQai9jydeTL9NOR0nPPS8RhaWJpL3iXVgGF9GW43BGoOu4MxParhAwgV1cursVCtoy6E+8NCOWwnKr7G43lDQ9FsfaUaloVMS+H/ZVSfA4N6zinTHtHc20Rebt4D6nSdHZfhwxbOC+QJlJAsWYNm2J0Hu72O833D+H0qC5aSBRzPNj1YnUmGz7E52lPT7htvaUaV4U8y+F+Tl4PgKdNnNNAoASiCALsKQN2JG5zMVN/sS2nHgxlapT5X7weVUsTfxzhz5ETqJnW4HnJZY4R4jLwBlWiUSCKIwSPGYtKSF3ayj5kk7KoGrMToANSZRoujqvFU8xM7h0fFMHrDLSuSlK++hytUI3N7HoCBbbM3V2oo0MPmakppvmIXufYaozqrLmGz6liSwNgCYx7PK13jF88i8Wm7Ry7pYzll2Jc8GrXUqeW3kf9/WZ3hzOaSGqLVCi5wNPatrpy8uUt+Dt/E81P5TNB5NFN7s7F7CNEcI82BCLCACyKu1lY9AT6CSyOqlwR1BHrIBnlH7Q8f/AA0wqkBqpBck2tTBG55Xawv4GMqdrcPh6KYfDjve7W38MAU8/wATs59ksTc35X06x3bHsfWr1jVSouayr3b6LZeV7ENqSdQN95jcbg8TQ/x8OwUfEB7PrfJ/mmrZO63Um89daP0OdOLat/Njox/H8TWvep3aH4aO5151D9QJX0qQXUCx8LliPFjrb0iriqZOpKk/bBUnyJ3+Rk3dj5fTz/1nUjTV7rIi+6rWsRFgB0HXxPTqfK/nHpVW3vDTU30sPG+vrFo4OpWqWoo7PsSALKPEsLL6i/WafhPYUXz4l7n7KE/K7nX+2x/mMTU2mNJ2666uX3U1dmWp02rOFo0u8fcG1ivRr7qPHQeM9N4NhnpUKdOq5d1UBmJJudzqdSBsCdbCdGFwlOkuSmiou9lFrnqep8TrJTOfVruq7spJ43UBnPi0LLlHMgHrlJ9q3TS4v4yeVHFOINmNKkbMLZ3sDkuAQqg6F7EHXQXGhvaZ6lWNOLlN2RfZ6FSvUUKau+tSTi/F6eHU39pgARTXe17An7K+J0mD4nxGriWzVbW2WmvuID4nVm2ux6aATTU6CgEWvm1YnUuSLEsT7xtprOCtwSkdiy/dNx6MD9JxK3aPe3joutfwes2XsNbPaV96Xtby/LKXhmLbDuKlO1xuDswO6n0GvKwm74d2goVVvnCMBco5CkdbX0YeI+kzP/oC/wDMb0WdeE4VTpkMAWYbMxuR5AWAPjaFHtDuVZZXLKDaexv1LTl9L5408jVmn7YcfZIPjqCp+Xtf3SVjbeZ/A43uGCt/gtp/2mJ38KZv/SfAm2gnZoVo1qe/D/TPL7Zsk9lrd3U9HzXXsJeOWAgojdDNgesyrcSSqzO3t1QStPDt7OQXysRmHtuRfMRew9kcydUJw8Q4Jh6189MXO5GhPS/JvneQqjg7pX6+/mmMgoPE7+lvs7XXqjlr8RWlSWpWGRiB/DuGbORc00t7xGuu2l9BJOF4CpVcYrFXz2/h0jqKS6WY/wA+g9B0AV/D+zlCk4qDO7AWXvGzZOfsjZdbbAfhLkQr7RKri1l1r+PuXpwhRTUHdvjpjkl9/ZYvdRLDgqe2T0H4n/QyvEvuGUMqa7nX9IiCux1JXkdgjhGxwj2bRYRISAHRpimIYAcmKwqvvv1G8qq/DHG1mHofSXrCNMHBMTOmnqYHiHZvDVCc9AA8yt6Zv45bX+d5W0+xGEVgbPb7OYKD5lFDfWejYnDq41Hz5iZziNRaAY1WCqtrsxsNSAPW49YNyisN28zLOEosiw+HSmoRFVVGyqAAPkJJGYfEJUUNTdXU7MpDD1EyWO7WutdsiXoUm7t9szsWKAi/u+0pt1ym9riLc1HUpClOo2orPS+7sjT42syqWUXI5eHP6XjsM7FQXFj06dIzB4tKqCpTbMp2P4gjkR0Mnl0s3vj48xDTTGMwGp2Gp+UymDclA7e85zn71Q5rfK4A8hL/AI5UK4esw3FGpbzKkL9bTL8XqFaa25VaGoPIVkBv8rzmdqtvchzb/C+/yel/+cgl31Xkkvu39kWMIGE4R61hCEIEDWym6mxuDcHmNjcdJ39mqxNNqTEk0W7sE3uUIDUySdSQpCk8ypMohUP7046UKX+Z6n6CWHBKoXFMt9alHUXF70n0uBtcVW/tnU7Mm4Vt3hJf2cPt6iquyOpxg8eWj/h+hpBHCAELTvniQEeJg+NcWfGlqVEEYdVZ6j2vdUVnVydMoLIoABuQW/puOznHh+6l8TUAKOaeZj7T+yrLoNWazW0FzaJ7xN2XVteuJrezThG71xjirq69+XlzNQsVjYE2v4C1z6zO8N7WU6+IWhTpvqGOY5RYAXzFQSQp0FzbUjSbjAcPFszi56HYefUyqtP9pPczT3ZKz8St7NVBXLMy2CEWB3YHVSR0/GaiRooGwt/vSPEZCG6rXNNOG7Gw6AiCOEsOCEWEAFjTHRJBJR8Mw2JWtUNRwadzlW5NiwDHKTuAdNfG1tpbkSS0CIRW6LUN1WRARMp254e1ek9JCFZlFi1wLq19xqNrX1tvYzWOQBc7CZTjmHTFK9OoDkewIBINgQRqPLbYwqPFhVR7tvM8ioPXwtawfJU6qyksAba5SUqL4EXHS8lw+NZO9JWm4q5s61FJUlnzggA6EMdP9mavE9hUH+DWZfCoqsPIFMtvneUmL7L4pdO6DjrTZSPRrN9JzJQrRl9KwvXr2OlCvstWL32rtZunHx1/v2LDsBUYPVS91yI2v2rlS3mRa/kJtLTyZw1N8pz06g+/Te3hsbeWkssP2jxaf8YsOjqjfUAH6xtDao04qE0014Gfa+zp1qjq02mn15F9234mERcOjEVXKvoAciI4bM1xbUqAB59JjqvGXalVp1rZxTd0cC1zTBcq3jZSQR09Vr1Wd2qOczubsfoAByAFgBLPg/A1rYfEV6iAqKNVKN+bhGD1B5EZR5N4RUpfqKuNFx5Wzf34cTVR/wChs+Xl6rnfFvYvhUHWF4zuyBbw6/reNKnp/wCM4mOB623MlJETOPPyjAp6f+Ii92Tv9bn/AEhZBZFHxw1A1RqWhNFczA2YItQhip6+2o8ASeUrMHWag61aIGdTex0Dg6MrHfUX15Gx5TYYCmjYkIxDXoVkdDrdXan7wGwOVhrveZbiWAbD1Wovc21psf8AiU+R8SNj468xOrTi40IVIevvhnndoqxntdShPTFvJrK923z5npHCsemIpLVT3WGx3UjRla2xBuDODj/GaCUqtM1lztTdQqnM92UhdFuRqdztPO3VbG9rE3N7Wva1zfnoPSS8PwzVTlw6GoRuKdso82uFX5ma1trliMc9cjk/8TCD3pzsuuLGByNAzDMtmCsyqwGwYA2Ye0dD4xlZNDa9/AgE8rXO2w9Jq8J2LqkA1KqIeaqpf/MSv4S6wXZHDJ7waqf+odP7VspHmDER2Wq7Xx5s1VO0dnV93L8Fb5ZS/s5oYQYlBmc19SFZQqW+KxVmLNYjVjryAnsQmSw2GSmLU0VB/IoX8JpsBiQ635jcfnOnS+lWOaqqqTbz6u/2t9jqEcICEaNQojo0R0qWQQiwkAEIQgSJEMWR1GtyJ1G1uZtfXpvAgqOM4wZhSB1tmPrp+UrDOnH/AOI1+v05TmtENtt3MVXLAyMiSGNIlkxDRS9qq9Knhy1WktXVVRGA9p2NlsT7ttyRqADPOHokknNlufdUXUeAzkt9fSbj9oKHuKTfCmIUt4Bkemp/udR85jp09j2WjWg3Uinm2SVWqUv2Sa69iGlS9oCpc0/i7qy1COYXMbC+ut5vsHx/BFBTBFNAoXJUQqoW1st/dtbTeYg01c6t3b/bGqn/ALibHzFjIquamwWqLX91xrSfpY8j4H6xv/HUIfsvH5XzleRFTaqlZpVHdr09uD+/NFhxvEVKVdlw1YGlZSoJFRbML6Mbm17/ABdJwjjuMHKkf6D+Txr0VOpGvUaH1Gsb+79GYfMH8QZy6/YVRzbhuteKafwmvk7GzdsqFNRk5XXjf+bj247izsKY8kP5vIMRisQ4/iVyF/lIQeqgfUyTuf5j9B+UVaCg3tr1Op9TKUewqt/qcY+WX16l6vbULY3pebsuvQuuy3HaWGw7J3buxqMQEUKCCq2ZnawOuba58Jz8e4xUxShXWnTVTmGW7OD17xrWBGhAX5ytdzfKou1r6myqPtOeQ+p5RyYamNX/AIrfzXFJfuU76+bazs0thpxW7+63PT468jhVK7c3NKzbvj88OrXIaKUifZsxHO+Yj5m9pOSVOdGKOoOV10Zf1HUHQx9SoTyAtsAAAPSMdGYZVBZm0VRuWI0Amzu4xg42VuSWCm9KUru9/O56jw7Ed5Sp1Pt00f8AuUH851CQYDD93Tp0/sIi+eVQPynSBPNNjLZFEmwtYowb18ucgblH0ULELzJlL5GpNWaLjjFCq9IrRcKx0zE20sb8ifS1t+Vj2YcNlXNq1hcjQE210jxHTRbNzal9Vx4hEiwLhCLCQSEIQgARrCOiGAFXxDCZwHTUkD+ociJUOhBsRY+M1ZkbKDuL+co4XE1KSbujLSSnhHbZT+A+s0YpgbAD5CBkqnzFdwuZnMXwI1abU6gUq6lWW51BGuoGk8w7Qdn62Ca1QM1P4a1tD4ORorfQ8ug9yIkdSmCCCAQdCCLg+YmmjUlSleJEqEWrHz9J6OIspR1D0zup/LpPTeL9gMLUu1JDSP8A0jkF+oX3L+YmRx/Ymul+7dX/AJXBR7eYuGPyWdGPaFJ4lj5XwY6mzvR9dehmsRQFK1mzU2NkY7g/8tvHoef4szCS8S4NiKRz16FRKYFgWX2Mx3uwuu2UA35nxlc+FHIlfqPQ/lMdTtelRqum07LRrJuo9mValJT3lfx8+L58zrNQdRGVMSBtqeQ6mcGR9joPtAZvS2vrOmiEGx1/m3t89hI2ntmEI/4sv4RfZ+y5yl/kwvkkwlTdSLMfaP8ANyJv4aC3IWkzsALkgDqdBLXgXZDFYxkemop0xf8Ai1QQCGG6LvU5dB/NPTeA9i8LhbPk72qNe9qgMwNt0Hu0/wCkX6ky2y9oSdBOa+rPh6+vEXtOxxVVqD+n39Dzvg3ZTF4kZlp93TOz1brf7qe83zsD1mu4X2XXC+1lZntrUYXsOYW2ij69SZtiscFi61adVWk8cloVVCKwjMgRRNI2HQ7qD8hGjBU/sD0mPu3zDuHzKCnQZ9FF/wAPXlLrAYLu9Tqban8h+s7FFthYRbS0aaTuOhTURFXlHgRAJIJZjUEIQkFghCEACEIQAIQhABsI6JJIGERCI+0QiTchooMVx03IRPC7foNpwVOKVj8dvIATSYnAU31ZRfqND6icFTgCfCzDzsY+M6a4CJRm+JSNi6h3d/7jIzUY/ET8zLd+z7cnU+YI/WRHgVUc0PzP5iNVSHMW4SPJsf2hxGIDI7ZUO9NQNr6AtclgbcrA9LaShIamdLlOnTy6fhOvvLl3OUKXdgRYLluTcDkvS/Lea3s/2Cr4gLWroVpHVaRIVqg5GpfVV2OXc87bTz9qteq4t3XN6HdvTo0lJKz8NWZKnUDC4NxH4e37xhybaVqe4uLZ1v8ALb525Xno3Hewr1UzUaaJUUaAFFVwPgIGg8Dy8p5/wvC/++p066MMtdKZUkqwqkqEBA0y5yhPXxG8/pnRrxzdXw/zyK/qFVoyxnl1qetLxCqP+I3z1/GSLxesPiB81EkHBK3Rf7o4cCq/yep/Sd1yp+Bxt2fiCccqc1U/Ij85PT48Pip+h/WRDgFTmyerH8pMnZ886nov+sq3SLJTLHA45Kt8t7jcHedc5sBw9KV8tyTuTOy0RJq+B0b2yMtHWi2iyty1hoEdCEgAhCECQhCEACEIQAIQhAAhCEAEhFiSSBCIlo6FoANtC0dCAHlXZfsLiFxpfF01NJGepmzIRXqlwUbKNbbsbgagDUT1O0dCUhBR0LSk5ajZm8f2Nw9XFpjGzB1ZHZQRlqPTCimzX2y5V2tfKPnpbQlnFPUhNrQI6IIsCAhCECQhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIkIQAIsIQIEhCEkAhCEACEIQAWEISCQhCEACEIQAIQhAAhCEACEIQAIQhAD/2Q==",
    imageLabel: "Image Text",
  },
  {
    title: "Public interest technology",
    date: "July 06",
    description:
      "The development and realization of socially responsible solutions to the challenges.",
    image:
      "https://media.istockphoto.com/id/1175935842/photo/sculpture-thinker-with-golden-vr-glasses-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=mFbpUeUS4CZGz76hADcl5pZPZmAFaTp540HyGHaio0k=",
    imageLabel: "Image Text",
  },
];

const footer = {
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com" },
    { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com" },
    { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
  ],
};

const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Blog() {
  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    //   <Container maxWidth="lg">
    //     <Header title="Next Wave of Technology" sections={sections} />
    //     <main>
    //       <MainFeaturedPost post={mainFeaturedTech} />
    //       <Grid container spacing={4}>
    //         {featuredPosts.map((post) => (
    //           <FeaturedPost key={post.title} post={post} />
    //         ))}
    //       </Grid>
    //     </main>
    //   </Container>
    //   <Footer
    //     title="Footer"
    //     description="Something here to give the footer a purpose!"
    //     social={footer.social}
    //   />
    // </ThemeProvider>
    <div>
    {/* <h1>Form Components</h1> */}
    {/* <CardPayment/> */}
    {/* <Home/> */}
    {/* <Hotelmgmt/> */}
    {/* <JobApp/> */}
    {/* <Mui/> */}
    <Profile/>
    </div>
  );
}
