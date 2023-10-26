import { Experience } from "../Models/experience";

export class ExperienceRepo{
    experienceInfo : Array<Experience> = [
        { name: "Antra Inc", 
        position: "Full Stack Software Developer", 
        description: "I am an enthusiastic Full Stack developer who thrives in an agile work environment alongside a dynamic team of 10 developers. I have proactively immersed myself in practical learning experiences, gaining expertise in cutting-edge technologies such as .NET, Angular, React, Azure, and more.",
        date: "Jan 2023 - Current",
        tech: ['NET', 'Angular', 'React' ,'Docker', 'Azure', 'SQL', 'Github'],
        soft: [],
        flag : "usa"
        },
        // { name: "Diletta Solutions", 
        // position: "Flutter Developer", 
        // description: "",
        // date: "Oct 2023 - Current",
        // tech: ['Flutter', 'Github'],
        // soft: [],
        // flag : "usa"
        // },
        // { name: "Freelancer", 
        // position: "Full Stack Developer", 
        // description: "I embarked on a career as a freelance programmer, successfully delivering many projects for multiple clients. The projects that I was involved in include the web development, both front and backend, of rental car companies, online stores, photographer portfolios, dental clinic websites, and many others.",
        // date: "Jan 2023 - Current",
        // tech: ['NET', 'Angular', 'React' , 'Flutter' ,'Docker', 'Azure', 'SQL', 'Github'],
        // soft: [],
        // flag : "usa"
        // },
        { name: "Braiden Dining Hall", 
        position: "Student Supervisor", 
        description: "Worked on Colorado State University’s dining hall, Braiden Dining hall as a part time job. As a supervisor I was responsible for training new employees and act as a shift supervisor for a crew of up to 25 members. The  dining  hall  served  between  700 –1500  customer  and  students daily.",
        date: "2019 - 2022",
        tech: ['people', 'chat'],
        soft: ['Leadership', 'Communicator'],
        flag : "usa"
        },
        { name: "Diletta Solutions", 
        position: "Front-end Developer Intern", 
        description: "As a summer intern, I was cooperating in the development of the front-end of a medical application, providing healthcare professionals with a comprehensive solution for monitoring and analyzing patient information. The application generates prescriptions and forms related with Cannabidiol drugs, leading to potential results, with greater efficiency in clinical workflows",
        date: "Summer 2019",
        tech: ['Flutter', 'Github'],
        soft: [],
        flag : "brazil"
        }
    ];
}