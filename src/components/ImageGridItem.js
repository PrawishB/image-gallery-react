import { makeStyles } from '@material-ui/core';
import Image from "material-ui-image";
import { BrokenImage } from '@material-ui/icons';

const useStyles = makeStyles({
    imgItem: {
        transition: "transform ease-in-out 0.3s",
        "&:hover": {
            transform: "scale(1.05)"
        }
    }
})

const ImageGridItem = ({ src }) => {

    const classes = useStyles();

    return (
        <div className={classes.imgItem}>
            <Image src={src} aspectRatio={(1/0.56)} errorIcon={<BrokenImage />} style={{ borderLeft: "5px solid #276749" }} />
        </div>
    )
}

export default ImageGridItem;
