import { IoCodeWorking,IoLogoGithub,IoLogoWhatsapp,IoLogoTwitter,IoLogoLinkedin,IoLogoYoutube } from "react-icons/io5";
import collection from "./img/nftcoll.png"
import ico from "./img/ico.png"
import mint from "./img/minter.png"
import devs from "./img/cryptodev.png"

export const Experience = [
    {
        id: 1,
        date: "2019 - 2020",
        iconsSrc: <IoCodeWorking/>,
        title: "Creative Director",
        location: "Doha, Qatar",
        description: "Creative Director, User Experience,Visual Design, Project Management, Team Leading"
    },
    {
        id: 2,
        date: "2020 - 2021",
        iconsSrc: <IoCodeWorking/>,
        title: "Project Management",
        location: "Dubai, UAE",
        description: "Creative Director, User Experience,Visual Design, Project Management, Team Leading"
    },
    {
        id: 3,
        date: "2021 - present",
        iconsSrc: <IoCodeWorking/>,
        title: "Team Leading",
        location: "Shanghai, China",
        description: "Creative Director, User Experience,Visual Design, Project Management, Team Leading"
    },
];

export const Projects = [
    {
        id: 1,
        name: "NFT Minter",
        imageSrc: mint,
        tech: "ReactJs, NextJs, Ethers, Tailwind,",
        github: "https://github.com/ahmadou5/minter",
    },
    {
        id: 2,
        name: "ERC2O ICO",
        imageSrc: ico,
        tech: "ReactJs, Tailwind, Ethers, NextJs",
        github: "https://github.com/ahmadou5/ico-dapp",
    },
    {
        id: 3,
        name: "NFT Collection",
        imageSrc: collection,
        tech: "ReactJs, Tailwind, Ethers, IPFS",
        github: "https://github.com/ahmadou5/NFT-Collection",
    },
    {
        id: 4,
        name: "Devs HUB",
        imageSrc: devs,
        tech: "ReactJs, NextJs, Ethers",
        github: "https://github.com/ahmadou5/crypt-devs",
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
        link: "#",
    },
]