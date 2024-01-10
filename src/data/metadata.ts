import { FunctionComponent } from 'react';
import { FaGithub, FaHome, FaLinkedin, FaUser } from 'react-icons/fa';
import { GiFiles } from 'react-icons/gi';
import { SiLeetcode } from 'react-icons/si';
import { MdSettingsInputComposite } from 'react-icons/md';
import { ContactPage } from '../pages/contact-page';
import { HomePage } from '../pages/home-page';
import { ProjectsPage } from '../pages/projects-page';
import { SkillsPage } from '../pages/skills-page';
import { INavbarItems, IRouteOptions } from '../typings';
import { IIConLinkProps as IFooterIcon } from '../typings/component-props';
import { Urls } from './constants';

export const ROUTE_CONFIGURATIONS: Array<IRouteOptions> = [
    {
        name: 'home',
        path: '/',
        page: HomePage
    },
    {
        name: 'skills',
        path: '/skills',
        page: SkillsPage
    },
    {
        name: 'projects',
        path: '/projects',
        page: ProjectsPage
    },
    {
        name: 'contact',
        path: '/contact',
        page: ContactPage
    }
];

//TODO Change the icons they are wrong
const navbarIcons: FunctionComponent[] = [FaHome, FaUser, MdSettingsInputComposite, GiFiles];
export const NAVBAR_ITEMS: INavbarItems[] = ROUTE_CONFIGURATIONS.map(({ name, path }, index) => ({ name, path, icon: navbarIcons[index] }));

export const FOOTER_LINKS: IFooterIcon[] = [
    { icon: FaGithub, url: Urls.github },
    { icon: FaLinkedin, url: Urls.linkedin },
    { icon: SiLeetcode, url: Urls.leetcode }
];
