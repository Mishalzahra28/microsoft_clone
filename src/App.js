import Navigation from "./Components/Content/Navigation";
import Header from "./Components/Content/Header";
import Productlist from "./Components/Content/Productlist";
import "./App.css";
import Container from "./Components/UI/Container";

import img2 from "./Components/pictures/Office-365-Licensing-Alltek-601x376x0x0x601x376x1624359211.png";
import img3 from "./Components/pictures/ms-edge-logo655.jpg";
import img4 from "./Components/pictures/RE4q5Ja.webp";
import img5 from "./Components/pictures/BSc-Computer-Science---header-image_3.jpg";
import img6 from "./Components/pictures/Using-Microsoft-Teams-for-Employee-Engagement---blog-post.webp";
import img7 from "./Components/pictures/office-365.jpg";
import img8 from "./Components/pictures/maxresdefault.jpg";
import img9 from "./Components/pictures/Windows_365_Switch_Still.0.jfif";
import img10 from "./Components/pictures/pexels-jéshoots-238118.jpg";
import img11 from "./Components/pictures/Microsoft-software-logos-outlook-scaled.jpg";

function App() {
  const displayContent = [
    {
      bgimg: img10,
      heading: "Designed for life today-and tomorrow",
      text: `The next generation of games. Your goals. Friends and Family.\n Windows 11 was made to bring you closer to everyone you love`,
      link: "https://www.microsoft.com/en-gb/windows/windows-11?icid=mscom_marcom_H1a_Win11PChlth#pchealthcheck",
      linkTitle: " See if Your PC is ready",
    },
    {
      bgimg: img11,
      heading: "Outlook for iOS and Android",
      text: "Connect. Organise. Get things done.",
      link: "https://www.microsoft.com/en/microsoft-365/outlook-mobile-for-android-and-ios?icid=mscom_marcom_MPH1a_OutlookApp",
      linkTitle: "Download Now",
    },
  ];

  const prod1 = [
    {
      image: img2,
      heading: "Microsoft 365",
      para: "Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.",
      link: "https://www.microsoft.com/en-pk/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_CPH1a_M365Family",
      linkTitle: "For up to 6 people",
    },
    {
      image: img3,
      heading: "Microsoft Edge",
      para: "World-class performance with more privacy, more productivity and more value while you browse.",
      link: "https://www.microsoft.com/en-us/edge?form=MI13F3&OCID=MI13F3",
      linkTitle: "Download Now",
    },
    {
      image: img4,
      heading: "Microsoft OneDrive",
      para: "Save your files and photos to OneDrive and access them from any device, anywhere.",
      link: "https://www.microsoft.com/en/microsoft-365/onedrive/online-cloud-storage?icid=mscom_marcom_CPH3a_OneDrive",
      linkTitle: "Learn More",
    },
    {
      image: img5,
      heading: "OneNote",
      para: "Organise your notes and your life.",
      link: "https://www.microsoft.com/en/microsoft-365/onenote/digital-note-taking-app?icid=mscom_marcom_CPH4a_OneNote",
      linkTitle: "Learn More",
    },
  ];

  const prod2 = [
    {
      image: img6,
      heading: "Get Microsoft Teams for Free",
      para: "Online meetings, chat and shared cloud storage – all in one place.",
      link: "https://www.microsoft.com/en-pk/microsoft-teams/free?icid=mscom_marcom_CPW1a_MicrosoftTeams",
      linkTitle: "Sign Up For Free",
    },
    {
      image: img7,
      heading: "Microsoft 365 for business",
      para: "Stay a step ahead with powerful apps for productivity, connection and security.",
      link: "https://www.microsoft.com/en/microsoft-365/business/compare-all-microsoft-365-business-products?icid=mscom_marcom_CPW2a_M365forBusiness&activetab=tab%3aprimaryr2",
      linkTitle: "Shop Now",
    },
    {
      image: img8,
      heading: "Microsoft Viva",
      para: "Discover the new employee experience platform designed to help people connect, focus, learn and thrive at work.",
      link: "https://www.microsoft.com/en-ww/microsoft-viva/overview?icid=mscom_marcom_CPW3a_MicrosoftViva",
      linkTitle: "Learn More",
    },
    {
      image: img9,
      heading: "Welcome to your Windows 365 Cloud PC",
      para: "Securely stream your Windows experience from the Microsoft cloud to any device.",
      link: "https://www.microsoft.com/en-ww/windows-365?icid=mscom_marcom_CPW4a_Windows365",
      linkTitle: "Get it Today",
    },
  ];

  return (
    <div>
      <Container className="container">
        <Navigation />
        <Header item={displayContent[0]} />
        <Productlist items={prod1} />
        <Header item={displayContent[1]} />
        <h2 className="heading2">For business</h2>
        <Productlist items={prod2} />
      </Container>
    </div>
  );
}

export default App;
