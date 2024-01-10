import { AiOutlineLinkedin } from 'react-icons/ai';
import { IFooterData } from './types';
import { LuEye, LuGitFork, LuGithub, LuMail, LuStar } from 'react-icons/lu';

export const githubUserName = 'Niranjan-A-S';
export const myName = 'Niranjan A S';
export const repoName = 'portfolio_';
export const gitIcons = [LuEye, LuGitFork, LuStar];

export const defaultFooterData: IFooterData = {
    branch: 'dev',
    forks: 0,
    stars: 0,
    watchers: 0
};

export enum Urls {
    github = 'https://github.com/Niranjan-A-S',
    linkedin = 'https://www.linkedin.com/in/niranjan-as/',
    mail = 'mailto:niranjan0881@gmail.com',
    source = 'https://github.com/Niranjan-A-S/portfolio_',
}

export const SOCIAL_ACCOUNTS = [
    {
        url: Urls.github,
        icon: LuGithub,
        name: 'Github'
    },
    {
        url: Urls.linkedin,
        icon: AiOutlineLinkedin,
        name: 'LinkedIn'
    },
    {
        url: Urls.mail,
        icon: LuMail,
        name: 'Mail'
    }
];

