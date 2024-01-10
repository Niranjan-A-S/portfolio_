/* eslint-disable @typescript-eslint/no-explicit-any */
export const useFullscreen = () => {
    function enterFullScreen(element: any) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        }
    }

    const isInFullScreen = () => document.fullscreenElement || (document as any).webkitIsFullScreen || (document as any).mozFullScreen || (document as any).msFullscreenElement;

    const toggleFullScreen = (element: any) => {
        if (isInFullScreen()) {
            exitFullscreen();
        } else {
            enterFullScreen(element);
        }
    };

    return { toggleFullScreen };
};
