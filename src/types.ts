export interface IGitStatusProps {
    icon: React.ElementType;
    value: number;
}

export interface IFooterLinkProps {
    url: string;
    icon: React.ElementType;
    name: string;
}

export interface IFooterData {
    branch: string;
    forks: number;
    stars: number;
    watchers: number;
}
