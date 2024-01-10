import { useEffect, useState } from 'react';
import { IFooterData } from '../types';
import { defaultFooterData, githubUserName, repoName } from '../constants';

export const useFooterData = () => {

    const [footerData, setFooterData] = useState<IFooterData>(defaultFooterData);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${githubUserName}/${repoName}`, {
                    headers: {
                        'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`
                    }
                });
                const data = await response.json();
                if (data) {
                    const { default_branch: branch, forks, stargazers_count: stars, watchers } = data;
                    setFooterData({
                        branch,
                        forks,
                        stars,
                        watchers
                    });
                }
            } catch (error) {
                console.error('Failed to fetch repo details from GitHub', error);
            }
        })();
    }, []);

    return footerData;
};
