import React, { useRef, useState } from 'react';
import { Tour as AntTour } from 'antd';
import type { TourProps as AntTourProps } from 'antd';

interface TourProps extends AntTourProps {
    open: boolean;
    restartTourButton: React.MutableRefObject<null>;
    leftSideBar: React.MutableRefObject<null>;
    rightSideBar: React.MutableRefObject<null>;
    twodView: React.MutableRefObject<null>;
    threedView: React.MutableRefObject<null>;
    realTime: React.MutableRefObject<null>;
    activeSats: React.MutableRefObject<null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tour = ({
    open = true,
    setOpen, 
    restartTourButton,
    leftSideBar,
    rightSideBar,
    twodView,
    threedView,
    realTime,
    activeSats,
    ...rest}: TourProps) => {

    const steps: TourProps['steps'] = [
        {
          title: 'Welcome the AstroVIZards Tour!',
          description: 'We will be giving you, a quick tour on how to use this website!',
        },
        {
          title: 'Filtering Satellites I',
          description: 'You can filter satellites by country, purpose and many other categories from this sidebar. You can expand it by clicking the arrow.',
          target: () => leftSideBar.current,
          placement: 'right',
        },
        {
          title: 'Filtering Satellites II',
          description: 'You can also search a satellite by its name, and click on the name to directly go to it from this sidebar.',
          target: () => rightSideBar.current,
          placement: 'left',
        },
        {
            title: 'Viewing Satellites I',
            description: 'You can view satellites in 2D from this view.',
            target: () => twodView.current,
        },
        {
            title: 'Viewing Satellites II',
            description: 'You can view satellites in 3D from this view.',
            target: () => threedView.current,
        },
        {
            title: 'Real-time positions!',
            description: 'By clicking on this button, you can enable/disable real-time position fetching!',
            target: () => realTime.current,
        },
        {
            title: 'Active Satellites',
            description: 'By clicking this button, only the currently active satellites will be shown!',
            target: () => activeSats.current,
        },
        {
            title: 'That\'s it!',
            description: 'Enjoy and let us know your feedback! P.S: You can always re-start the tour by clicking the button on the top right corner.',
            target: () => restartTourButton.current,
        },
      ];
    

    return (
        <AntTour open={open} onClose={() => setOpen(false)} steps={steps} {...rest}/>
    );
}

export { Tour }
export default Tour;