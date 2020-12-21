import React, { useEffect } from 'react';
import useFirebaseStorage from '../firebase/useFirebaseStorage';

import LinearProgress from '@material-ui/core/LinearProgress';

const UploadProgressBar = ({ file, setFile }) => {

    const { url, progress } = useFirebaseStorage(file, setFile);
    console.log(progress);

    useEffect(() => {
        if (url) {
            setFile(null);
        };
    }, [url, setFile])

    return (
        <LinearProgress variant="determinate" value={progress} />
    )
}

export default UploadProgressBar;
