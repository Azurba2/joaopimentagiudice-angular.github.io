import { EducationCard } from "../Models/educationCard";

export class EducationRepo{
    educationInfo : Array<EducationCard> = [
        {name: "PUC-Campinas", flag: "brazil", text: "Bachelor in General Biology", date: "2011 - 2014", img: "assets/img/puc-camp.jpeg" },
        {name: "Universidade de Sao Paulo", flag: "brazil", text: "Master in Microbiology and Biophysics", date: "2015 - 2017", img: "assets/img/usp2.jpg" },
        {name: "Colorado State University", flag: "usa", text: "Bachelor in Computer Science", date: "2018 - 2022", img: "assets/img/csu2.jpg"}
    ];
}