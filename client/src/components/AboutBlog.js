import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4.5,
    borderColor: '#001F54',
  }),
  content: {
    fontSize: 20,
    marginTop: 20,
  },
});

function AboutBlog(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          <b>About this blog</b>
        </Typography>
        <Typography component="p" className={classes.content}>
            I created this blog to combine two of my passions, coding and writing.Specifically, I started this blog to jot down some of my thoughts and ideas about the many challenges of learning how to code and about the interesting, late night adventures of being a full stack web developer.
        </Typography>
        <Typography component="p" className={classes.content}>
          My goal in writing this blog is to engage and build a community of developers in the Twin Cities by highlighting coding events in the Twin Cities area, sharing my experiences of learning how to code from the University of Minnesota full stack web development program, writing reviews about some of the courses I have taken, and going through some of the projects I am currently working on in my free time.
        </Typography>
      </Paper>
    </div>
  );
}

AboutBlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutBlog);