import ArticleOne from "../images/project-one/mainimage.png";
import ArticleTwo from "../images/project-two/mainimage.png";
import ArticleThree from "../images/project-three/mainimage.png";

import HeaderImage from "../images/project-one/headerimage.png";
import HeaderImage2 from "../images/project-two/headerimage.png";
import HeaderImage3 from "../images/project-three/headerimage.png";

import ApproahImage1 from "../images/project-one/approachimage1.png";
import ApproahImage2 from "../images/project-two/approachimage2.png";
import ApproahImage3 from "../images/project-three/approachimage3.png";

const articles = [
  {
    mainImage: ArticleOne,
    id: "01",
    name: "BoardGamers",
    subHeading: "A social app to find gaming events near you",
    type: "UX/UI Case Study",
    view: "VIEW WORK",
    headerText:
      "Roll the dice  with your friends in a fun, new, social board game experience.",
    headerImage: HeaderImage,
    tools: "Figma, Adobe Illustrator",
    timeline: "2 weeks",
    myRole: "Branding, \n User Research, \n UX/UI Design,  \n Prototyping ",
    overview:
      "Talk ’n’ roll help you find gaming events, players, groups. Search local gaming events all in one place, without needing to keep track of different websites and social platforms. Post listings looking for people interested in playing specific games near you.",
    approachImage: ApproahImage1,
    approach:
      "The idea was to use technology in a way that it brings people closer through social board game gatherings",
    articleLink:
      "https://www.figma.com/proto/TZDAfiowf98P0IWvUyrTqp/BB-Prototyping?node-id=69%3A4&viewport=446%2C373%2C0.18485523760318756&scaling=scale-down",
    articleLinkText: "VIEW INTERACTIVE PROTOTYPE",
    challenge:
      "Since everything is becoming digital, there has been a rise in people spending too much time on technology and forgetting the experience of social gatherings. ",
  },
  {
    mainImage: ArticleTwo,
    id: "02",
    name: "Wander",
    subHeading:
      "A travel app to log your trips and connect to other travellers",
    type: "UX/UI Design / Front End",
    view: "VIEW WORK",
    headerText:
      "Bring together all the pieces of your trip and turn that into a simple day by day narrative. ",
    headerImage: HeaderImage2,
    tools: "Figma, Adobe Illustrator,  \n HTML, CSS,  Javascript",
    timeline: "4 weeks",
    myRole: "Branding, \n User Research, \n UX/UI Design, \nDevelopment",
    overview:
      "Wonder is a travel journal which allows the  user to create a travel profile, log their past trips, connect with other travellers and wish-list their future travel destinations. \n \n The app brings together all the pieces of your trip and turn that into a simple day by day narrative. ",
    approachImage: ApproahImage2,
    approach:
      "The idea was to narrate their trip through pictures and captions. One can easily update and make changes accordingly and it will essentially create an entire digital diary of your trip. The app will also let you share your travel experiences with other users while having all travellers on just one platform.",
    articleLink: "/",
    articleLinkText: "WEBSITE COMING SOON",
    challenge:
      "One of the downsides of taking a vacation is that it eventually comes to an end. I recently went to Greece for my summer vacation and even though it was a week long, it only felt like a day. To carry a physical journal is more of a hassle for any traveller. Hence, except a bunch of photos, a few videos and a stamp on my passport, I wasn’t able to record my trip.",
  },
  {
    mainImage: ArticleThree,
    id: "03",
    name: "Powerup",
    subHeading: "An app to rent mobile chargers from the nearest station",
    type: "UX/UI Case Study",
    view: "VIEW WORK",
    headerText:
      "Charge your mobile on the go. Never have to worry about your phone dying again. ",
    headerImage: HeaderImage3,
    tools: "Figma, Illustrator",
    timeline: "2 weeks",
    myRole: "Branding, \n User Research, \n UX/UI Design,  \n Prototyping ",
    overview:
      "Powerup is a mobile charger rental app to find charging stations near you. It lets you charge your mobile on the go and when it’s fully charged you can return the battery at any station.",
    approachImage: ApproahImage3,
    approach:
      "I wanted the app to look fun, colourful because that’s how board games are. ",
    articleLink: "/",
    articleLinkText: "WEBSITE COMING SOON",
  },
];

export default articles;
