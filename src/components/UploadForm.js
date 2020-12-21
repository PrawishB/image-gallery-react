import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ProgressBar from './ProgressBar';

const useStyles = makeStyles({
    uploadBtn: {
        display: "flex",
        justifyContent: "center",
        margin: "1rem 0",
    }
})

const UploadForm = () => {
    
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedType = ['image/jpeg', 'image.png'];

    const uploadHandler = (e) => {

        let selectedFile = e.target.files[0];
        if (selectedFile && allowedType.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Invalid file type selected!');
        }
    };
    
    return (
        <>
            <div className={classes.uploadBtn}>
                <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={uploadHandler}
                    />
                        <Fab
                        color="secondary"
                        size="small"
                        component="span"
                        aria-label="add"
                        variant="extended"
                        >
                        <AddIcon /> Upload photo
                        </Fab>
                </label>
            </div>
            { error && <div>{ error }</div> }
            { file && <ProgressBar file={file} setFile={setFile} />}
        </>
    );
}

export default UploadForm;