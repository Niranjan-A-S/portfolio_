import { AboutPage } from "../src/pages/about-page";
import { ContactPage } from "../src/pages/contact-page";
import { HomePage } from "../src/pages/home-page";
import { ProjectsPage } from "../src/pages/projects-page";
import { SkillsPage } from "../src/pages/skills-page";
import { IRouteOptions } from "../typings";

export const ROUTE_CONFIGURATIONS: Array<IRouteOptions> = [
    {
        name: 'Home',
        path: '/',
        page: HomePage
    },
    {
        name: 'About',
        path: '/about',
        page: AboutPage
    },
    {
        name: 'Skills',
        path: '/skills',
        page: SkillsPage
    },
    {
        name: 'Projects',
        path: '/projects',
        page: ProjectsPage
    },
    {
        name: 'Contact',
        path: '/contact',
        page: ContactPage
    }
]