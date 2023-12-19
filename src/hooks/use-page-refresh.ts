import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePageRefresh = () => {
    const navigate = useNavigate();

    const refreshPage = useCallback(() => {
        navigate(0);
    }, [navigate]);

    return refreshPage;
};
