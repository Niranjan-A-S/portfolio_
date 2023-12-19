import { AboutPage } from '../pages/about-page';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';
import { ProjectsPage } from '../pages/projects-page';
import { SkillsPage } from '../pages/skills-page';
import { IRouteOptions } from '../typings';

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
];
