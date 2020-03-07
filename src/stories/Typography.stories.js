import React from 'react';
import Typography from '@material-ui/core/Typography';


export default {
    title: 'Typography',
};

// h1 - h6, subtitle1, subtitle2, body1, body2
// https://material-ui.com/components/typography/
export const Text = ({ variant = "h1", text = "h1. Heading" }) => {
    return (
        <Typography variant={variant}>
            {text}
        </Typography>)
};
