import { FunctionComponent } from 'react';
import { FaHome, FaMobile, FaUser } from 'react-icons/fa';
import { GiFiles } from 'react-icons/gi';
import { IoDocument } from 'react-icons/io5';
import { MdSettingsInputComposite } from 'react-icons/md';
import { AboutPage } from '../pages/about-page';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';
import { ProjectsPage } from '../pages/projects-page';
import { SkillsPage } from '../pages/skills-page';
import { INavbarItems, IRouteOptions } from '../typings';

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

const navbarIcons: FunctionComponent[] = [FaHome, FaUser, MdSettingsInputComposite, GiFiles, FaMobile, IoDocument];
export const NAVBAR_ITEMS: INavbarItems[] = [...ROUTE_CONFIGURATIONS.map(({ name, path }, index) => ({ name, path, icon: navbarIcons[index] })), { name: 'Resume', icon: IoDocument, path: '/resume' }];
