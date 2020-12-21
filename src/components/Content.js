import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ImageGrid from './ImageGrid';
import UploadForm from './UploadForm';

const useStyles = makeStyles({
    pageHeader: {
        display: "flex",
        width: "95%",
        justifyContent: "center",
        margin: "1.8rem auto 0",
        padding: "0.2rem 0",
        borderRadius: "5px 5px 0 0",
        backgroundColor: "#276749",
        color: "#e6e6e6"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        width: "100%",
        zIndex: "5"
    },
    contentHeader: {
        textAlign: "center"
    },
    contentCard: {
        width: "95%",
        margin: "0 auto 2rem",
        padding: "1rem",
        borderRadius: "0 0 5px 5px",
        backgroundColor: "#282828",
        color: "#fff"
    },
})

const Content = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md" disableGutters="true" className={classes.content}>
            <div className={classes.pageHeader} >
                <Typography variant="h3">Image-Gallery</Typography>
            </div>
            <div className={classes.contentCard}>
              <div className={classes.contentHeader}>
                  <Typography component="span" variant="subtitle1">
                      <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas est dolores maxime. Enim asperiores, 
                          nemo consequuntur laudantium molestias necessitatibus, expedita debitis facilis nihil quisquam quis omnis beatae. 
                          Perspiciatis cumque consequuntur officia corporis ipsum harum dolore veritatis eos maxime sunt, 
                          fugit quae inventore adipisci similique incidunt voluptate ratione autem quia excepturi 
                          soluta? Dolores quia accusantium illum recusandae iste pariatur repudiandae soluta.
                      </p>
                  </Typography>
                <UploadForm />
              </div>
              <ImageGrid />
            </div>
        </Container>
    )
}

export default Content;
