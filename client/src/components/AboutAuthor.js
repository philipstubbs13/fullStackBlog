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

function AboutAuthor(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          <b>About the author</b>
        </Typography>
        <Typography component="p" className={classes.content}>
          In 2017, I decided to chase after a dream and learn how to code.Ever since then, my life has been turned upside down.For me, learning how to code taught me how to think critically and solve problems creatively and quickly.There 's nothing more satisfying than staying up all night to figure out a bug in your code and figure out a solution at 3:30 in the morning (hence, the name of this blog).
        </Typography>
        <Typography component="p" className={classes.content}>
          With learning how to code comes frustration, energy drinks, and many late night coding sessions.But, in my opinion, the challenges are what make coding so exciting and wanting me coming back
          for more.There are always new tools and technologies to learn.There 's never a dull moment in learning how to code or trying to figure out a solution to a complex problem. I started this website to share my passion. I hope my experiences in learning how to code will help and inspire you on your coding journey.
        </Typography>
      </Paper>
    </div>
  );
}

AboutAuthor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutAuthor);
