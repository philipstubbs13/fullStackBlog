// Import React since we are using React.
import React from 'react';
import PropTypes from 'prop-types';
// Import Style
import { withStyles } from '@material-ui/core/styles';
// Import material-ui components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Style
const styles = {
  root: {
    backgroundColor: '#001F54',
  },
  copyright: {
    marginTop: 10,
    backgroundColor: '#001F54',
    color: 'white',
    fontSize: 18,
  },
  footerContent: {
    backgroundColor: '#001F54',
    color: 'white',
    fontSize: 40,
  },
};

// Render Footer component.
function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography component="h2" color="inherit" className={classes.footerContent}>
            Insomniac Coder
          </Typography>
          <Typography component="p" className={classes.copyright}>
            Copyright &copy; 2018
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export Footer component with stying so that it can be rendered to the page.
export default withStyles(styles)(Footer);