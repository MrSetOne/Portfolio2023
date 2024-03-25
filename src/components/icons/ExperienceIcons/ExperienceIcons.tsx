import React from "react";
import Html5 from "./Html5";
import Css3 from "./Css3";
import Sass from "./Sass";
import Tailwind from "./Tailwind";
import TypeScript from "./TypeScript";
import Javascript from "./Javascript";
import Bootstrap from "./Bootstrap";
import Reactjs from "./Reactjs";
import Redux from "./Redux";
import Astro from "./Astro";
import AntDesign from "./AntDesign";
import FramerMotion from "./FramerMotion";
import MateriaUI from "./MateriaUI";
import Figma from "./Figma";
import NodeJs from "./NodeJs";
import Express from "./Express";
import I18n from "./I18n";
import Jwt from "./Jwt";
import MySql from "./MySql";
import MongoDB from "./MongoDB";
import Heroku from "./Heroku";
import Vercel from "./Vercel";
import Aws from "./Aws";
import Git from "./Git";
import Github from "../Github";
import Copilot from "./Copilot";
import Markdown from "./Markdown";
import Jira from "./Jira";
import Clickup from "./Clickup";
import Notion from "./Notion";
import Multer from "./Multer";
import Mongoose from "./Mongoose";
import Sequelize from "./Sequelize";
import Photoshop from "./Photoshop";
import Illustrator from "./Illustrator";
import DigitalOcean from "./DigitalOcean";
import Trello from "./Trello";
import Angular from "./Angular";

interface Props {
  icon: string;
  color?: string;
}

const ExperienceIcons = ({ icon, color = "white" }: Props) => {
  switch (icon) {
    case "HTML5":
      return <Html5 />;
    case "CSS3":
      return <Css3 />;
    case "Sass":
      return <Sass />;
    case "Tailwindcss":
      return <Tailwind />;
    case "Bootstap":
      return <Bootstrap />;
    case "JavaScript":
      return <Javascript color={color} />;
    case "TypeScript":
      return <TypeScript />;
    case "React":
      return <Reactjs />;
    case "Redux":
      return <Redux />;
    case "Astro":
      return <Astro />;
    case "AntDesign":
      return <AntDesign />;
    case "MaterialUI":
      return <MateriaUI color={color} />;
    case "FramerMotion":
      return <FramerMotion />;
    case "Figma":
      return <Figma color={color} />;
    case "NodeJs":
      return <NodeJs color={color} />;
    case "Express":
      return <Express />;
    case "i18n":
      return <I18n />;
    case "JsonWebToken":
      return <Jwt />;
    case "MySQL":
      return <MySql />;
    case "MongoDB":
      return <MongoDB />;
    case "Heroku":
      return <Heroku />;
    case "Vercel":
      return <Vercel />;
    case "AWS":
      return <Aws />;
    case "Git":
      return <Git />;
    case "GitHub":
      return <Github size="1rem" />;
    case "Copilot":
      return <Copilot color={color} />;
    case "Markdown":
      return <Markdown />;
    case "Jira":
      return <Jira />;
    case "Clickup":
      return <Clickup />;
    case "Notion":
      return <Notion />;
    case "Multer":
      return <Multer />;
    case "Mongoose":
      return <Mongoose />;
    case "Sequelize":
      return <Sequelize color={color} />;
    case "Photoshop":
      return <Photoshop color={color} />;
    case "Illustrator":
      return <Illustrator color={color} />;
    case "DigitalOcean":
      return <DigitalOcean color={color} />;
    case "Trello":
      return <Trello color={color} />;
    case "Angular":
      return <Angular color={color} />;
    default:
      return <></>;
  }
};

export default ExperienceIcons;
