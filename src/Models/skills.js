import { FaReact,FaNodeJs,FaNode,FaJava } from "react-icons/fa";
import { SiJavascript,SiMongodb,SiSass } from "react-icons/si";
import {AiOutlineConsoleSql} from "react-icons/ai";

const Skills = [
    {
        head:"Programming languages :",
        value:"Java, JavaScript, C, C++"
    },
    {
        head:"Web Development :",
        value:"Reactjs, Nodejs, Expressjs, Redux, Hooks, scss"
    },
    {
        head:"Version control system :",
        value:"Github, Gitlab, SVN"
    },
    {
        head:"Database :",
        value:"MySQL, PostgreSQL, MongoDB."
    },
]

export const aboutSkill = [ {
    name: "REACT",
    Icon: FaReact
}, {
    name: "NODE",
    Icon: FaNode
},{
    name: "EXPRESS",
    Icon: FaNodeJs
},{
    name: "SCSS",
    Icon: FaReact
},{
    name: "JAVASCRIPT",
    Icon: SiJavascript
},{
    name: "JAVA",
    Icon: FaJava
},{
    name: "MONGODB",
    Icon: SiMongodb
},{
    name: "SQL",
    Icon: AiOutlineConsoleSql
}]

export default Skills;