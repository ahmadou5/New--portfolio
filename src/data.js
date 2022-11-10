import { IoCodeWorking,IoLogoGithub,IoLogoWhatsapp,IoLogoTwitter,IoLogoLinkedin,IoLogoYoutube } from "react-icons/io5";
import punk from "./img/punk.png"
import phone from './img/phone.png'
import matic from './img/matic.png'
import space from './img/space.png'
import mint from "./img/flame.png"
import how from "./img/how.png"

export const Experience = [
    {
        id: 1,
        date: "2021 - 2022",
        iconsSrc: <IoCodeWorking/>,
        title: "Blockchain Developer",
        location: "Crypto Bank Africa",
        description: "Front End Dveloper, Smart Contract Developer, Team Leading"
    },
    {
        id: 2,
        date: "2022 - 2022",
        iconsSrc: <IoCodeWorking/>,
        title: "Founder",
        location: "FlameFinance",
        description: "CTO, Project Management, Team Leading"
    },

];

export const Projects = [
    {
        id: 1,
        name: "FlameFinance",
        imageSrc: mint,
        tech: "ReactJs, NextJs, Ethers, Tailwind,",
        github: "https://github.com/ahmadou5/Flame-Frontend1",
        projectUrl: "https://flame-frontend1-m3h8aw6g9-ahmadou5.vercel.app/"
    },
    {
        id: 2,
        name: "Matic Vault",
        imageSrc: matic,
        tech: "ReactJs, Tailwind, Ethers",
        github: "https://github.com/ahmadou5/kitchen",
        projectUrl: "https://maticvault.vercel.app/"
    },
    {
        id: 3,
        name: "Phone Store",
        imageSrc: phone,
        tech: "ReactJs, Tailwind",
        github: "https://github.com/ahmadou5/gadget",
        projectUrl: "https://gadget-amber.vercel.app/"
    },
    {
        id: 4,
        name: "PunkNFT",
        imageSrc: punk,
        tech: "ReactJs, NextJs, Ethers",
        github: "https://github.com/ahmadou5/crypt-devs",
        projectUrl: "https://punknft.vercel.app/"
    },
    {
        id: 5,
        name: "Space Network",
        imageSrc: space,
        tech: "ReactJs, NextJs, Ethers",
        github: "https://github.com/ahmadou5/space-network",
        projectUrl: "https://spacenetwork.vercel.app/"
    },
    {
        id: 4,
        name: "How To ChainID",
        imageSrc: how,
        tech: "ReactJs, Tailwind",
        github: "https://github.com/ahmadou5/crypt-devs",
        projectUrl: "https://howtochainide.vercel.app"
    },
    
];

export const SocialLinks = [
    {
        id: 1,
        iconSrc: (<IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>),
        name: "Github",
        link: "https://github.com/ahmadou5",
    },
    {
        id: 2,
        iconSrc: (<IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer"/>),
        name: "Twitter",
        link: "https://twitter.com/4hmadou_5",
    },
    {
        id: 3,
        iconSrc: (<IoLogoLinkedin  className="text-blue-800 text-3xl cursor-pointer"/>),
        name: "LinkedIn",
        link: "https://linkedin.com/in/ahmad-auwal-4386411bb",
    },
    {
        id: 4,
        iconSrc: (<IoLogoYoutube className="text-red-500 text-3xl cursor-pointer"/>),
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCiq05HiD3uAymd3GfqUF24g",
    },
    {
        id: 5,
        iconSrc: (<IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer"/>),
        name: "WhatsApp",
        link: "https://wa.me/qr/JHTDBFXGNWDID1",
    },
]
