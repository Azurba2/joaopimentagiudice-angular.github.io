import { Experience } from "../Models/experience";

export class ExperienceRepo{
    experienceInfo : Array<Experience> = [
        { name: "Antra Inc", 
        position: "Full Stack .NET Developer", 
        description: "Worked on an internal Human Resource Management System which aimed to help the HR department to have a comprehensive solution for managing employee data and HR processes, such as hiring.",
        date: "2023 - Current",
        tech: ['NET', 'Angular', 'Docker', 'Azure', 'SQL', 'Github'],
        soft: [],
        flag : "usa"
        },
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
        description: "I was responsible for developing the front-end of a health care application, which provided the healthcare professionals with a comprehensive solution for monitoring and analyzing patient information such as conditions, treatments, diagnosis, medicines currently being used as well as the generation of prescriptions and forms related with Cannabidiol drugs",
        date: "Summer 2019",
        tech: ['Flutter', 'Github'],
        soft: [],
        flag : "brazil"
        }
    ];
}