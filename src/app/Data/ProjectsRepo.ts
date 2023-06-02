import { Project } from "../Models/project";

export class ProjectsRepo {
    projectInfo : Array<Project> = [
        
        {name: 'Human Resource Management System',
        description: 'While working at Antra, I was involved in the development of an internal HR app to help the HR department to have a comprehensive solution for managing employee data and HR processes, such as hiring. The application basically had many microservices that communicated between each other. We used .NET for the backend and Angular for the client side ',
        tech: ['.NET', 'Angular', 'Docker', 'Azure', 'SQL'],
        button: [],
        link: [],
        date: 'Jan 2023 - Current'
        },

        {name: 'Abruza Cosmic Store',
        description: 'This is a fully working fictitious web store that sells universe themed products like t-shirts, hats, posters and much more. It is divided into two modules, ASP.NET API Backend which is responsible for managing all the API and database connections and the Angular Frontend module that uses API calls to get all the information about products, user account and order histories and display it to the user. This app uses JWT tokens to handle authentication and authorization of users, which includes account registration and login. In addition, it uses Route Guards in order to define which routes are available, depending if the user is logging in or not',
        tech: ['.NET', 'Angular', 'SQL', 'Bootstrap'],
        button: ['Backend Module', 'Frontend Module'],
        link: ['https://github.com/Azurba/AbruzaCosmicProducts_Backend', 'https://github.com/Azurba/AbruzaCosmicProduct_frontEnd'],
        date: 'May 2023 - Jun 2023'
        },

        {name: 'Nature - Photography Website',
        description: 'One of my hobbies is to do birdwatch and take pictures of the nature. I built this website, using Angular, to show the best pictures I took of birds, flowers, animals and landscapes.',
        tech: ['Angular', 'Bootstrap'],
        button: ['Github'],
        link: ['https://github.com/Azurba/Nature', ''],
        date: 'May 2023'
        },

        {name: 'Dental Clinic Website',
        description: 'I was hired to make a simple yet efficient website for a small dental clinic application. The app has two parts, a internal ASP.NET application (which runs locally) connected with a Firebase Database to store information about the patients, and the Angular website. The latter was designed to publicize her clinic and to allow the pacients to schedule appointments. ',
        tech: ['Angular', '.NET', 'Firebase', 'Bootstrap'],
        button: ['Website'],
        link: ['https://anacmpimenta.com/'],
        date: 'Apr - May 2023'
        },

        {name: 'MTG Store',
        description: 'A simple store for Magic The Gathering cards that dynamically loads all the cards available in the inventory and have a fully functional Cart system',
        tech: ['Angular', 'Bootstrap'],
        button: ["Github"],
        link: ["https://github.com/Azurba/mtg-store-Angular"],
        date: 'Apr 2023'
        },

        {name: 'SuperHero App',
        description: 'A simple application that stores and display information about comic super heroes. The app consist of 2 modules: one responsible for getting the data in the database and another for displaying the information to the user and making API Calls',
        tech: ['.NET', 'Angular', 'SQL', 'Bootstrap'],
        button: ["Backend Module", "Frontend Module"],
        link: ["https://github.com/Azurba/SuperHero_backend", "https://github.com/Azurba/SuperHero_frontend"],
        date: 'Mar 2023'
        },

        // {name: 'Simon Game',
        // description: 'This game was created to practice HTML, CSS and JQuery. It is a complete game that uses sounds and animations',
        // tech: ['HTML', 'CSS', 'JQuery', 'Javascript', 'Bootstrap'],
        // button: ['Github'],
        // link: ['https://github.com/Azurba/joaopimentagiudice.github.io/tree/main/Simon%20Game'],
        // date: 'Dez 2022'
        // },
        

        {name: 'King Oopers',
        description: 'This app was developed to investigate to what extent a more accessible UX design in mobile applications can improve the user experience and performance. It was semester-based project for the class Introduction to Human-Computer Interaction (CS464), taught by Francisco Ortega, on Spring 2022',
        tech: ['Flutter'],
        button: ['Wesite', 'Github'],
        link: ['https://www.cs.colostate.edu/~joaop/#/', 'https://github.com/Azurba/KingOopers'],
        date: 'Jan 2022 - May 2022'
        },

        {name: 'T10 Trip Planner',
        description: 'Simpler version of the Google Maps application, this app was designed to calculate the shortest distance between one place to another.It was developed as a semester-based project for the class Software Engineering (CS314), taught by Dave Matthews, on Fall 2021',
        tech: ['React', 'Java', 'SQL'],
        button: ['Github'],
        link: ['https://github.com/Azurba/T10-Map-App'],
        date: 'Ago 2021 - Dez 2021'
        },
        
        {name: 'Azurba MTG Player Panel',
        description: 'At a glance, this mobile application was designed specifically for assisting players to play Magic The Gathering.',
        tech: ['Flutter'],
        button: ['Github'],
        link: ['https://github.com/Azurba/Azurba-s_MTG_Player_Panel'],
        date: 'Dez 2021'
        },

        {name: 'Currency Calculator',
        description: 'This application calculates the current currency value for US Dolar, Euro and BR Real. It uses an API of the HG Brasil to get the values in real-time.',
        tech: ['Flutter'],
        button: ['Github'],
        link: ['https://github.com/Azurba/Currency-Calculator'],
        date: 'Jul 2019'
        },

    ];
}
