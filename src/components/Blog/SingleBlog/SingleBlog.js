import React from 'react'
import Fade from 'react-reveal/Fade';

// import placeholder from '../../../assets/png/placeholder.png'
// import control from '../../../assets/png/control.png'
// import Layertwo from '../../../assets/png/Layertwo.png'
import { Button } from '@material-ui/core';
import '../../Landing/Landing.css';
import './SingleBlog.css';
import { makeStyles } from '@material-ui/core/styles';

function SingleBlog({ theme, title, desc, date, image, url, id }) {

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            backgroundColor: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            marginTop: '5%' , 
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
            <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary}}>
                <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                    <img src={image} alt={title} />
                </div>
                <div className="singleBlog--body">
                    <p style={{color: theme.tertiary}}>{date}</p>
                    <h3 style={{color: theme.secondary}}>{title}</h3>
                    <h6 style={{color: theme.secondary}}>{desc}</h6>
                </div>
                    <Button className={classes.resumeBtn}>Read Now</Button>
                    
            </a>
        </Fade>
    )
}

export default SingleBlog
