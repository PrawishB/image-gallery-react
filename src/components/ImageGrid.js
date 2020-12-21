import React from 'react';
import { useFirebaseFirestore } from '../firebase/useFirebaseFirestore';

import Grid from '@material-ui/core/Grid';

import ImageGridItem from './ImageGridItem';

const ImageGrid = () => {

    const { docs } = useFirebaseFirestore('images');

    return (
        <Grid container spacing={2} >
            {docs.map(data => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={data.id}>
                        <ImageGridItem src={data.url}/>
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default ImageGrid;