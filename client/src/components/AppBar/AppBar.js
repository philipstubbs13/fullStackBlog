// Import React since we are using React
import React from 'react';
import PropTypes from 'prop-types';
// Import styling
import { withStyles } from '@material-ui/core/styles';
// Import material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Styling
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#001F54',
  },
  flex: {
    flex: 1,
    fontSize: 40,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navBar: {
    flexGrow: 1,
    backgroundColor: '#001F54',
  },
};

function NavAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <i className="fas fa-bars"></i>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Insomniac Coder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export the top navigation bar with styling so that it can be rendered to the pagee.
export default withStyles(styles)(NavAppBar);