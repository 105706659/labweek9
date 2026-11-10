
import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  Switch,
  Snackbar,
  Alert,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  LinearProgress,
  Chip,
  Avatar,
  Divider
} from '@mui/material';

import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Mail as MailIcon,
  Add as AddIcon
} from '@mui/icons-material';

import {
  Routes,
  Route,
  Link
} from 'react-router-dom';


// ==================================
// ABOUT PAGE COMPONENT
// ==================================

function About() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
      >
        About Us
      </Typography>

      <Typography variant="h5">
        This is the About page.
        Here, you can add more information
        about the project or your team.
      </Typography>
    </Container>
  );
}


// ==================================
// MAIN APP COMPONENT
// ==================================

function App() {

  // State management
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  // ==================================
  // EVENT HANDLERS
  // ==================================

  // Open or close navigation drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    setSnackbarMessage(
      newMode
        ? 'Dark mode enabled!'
        : 'Light mode enabled!'
    );

    setSnackbarOpen(true);
  };

  // Close snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  // Open contact dialog
  const handleDialogOpen = () => {
    setDrawerOpen(false);
    setDialogOpen(true);
  };

  // Close contact dialog
  const handleDialogClose = () => {
    if (!loading) {
      setDialogOpen(false);
    }
  };

  // Simulate form submission
  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDialogOpen(false);

      setSnackbarMessage('Contact form submitted!');
      setSnackbarOpen(true);
    }, 2000);
  };


  // ==================================
  // NAVIGATION DRAWER CONTENT
  // ==================================

  const drawerContent = (
    <Box sx={{ width: 250 }}>

      <List>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/about"
            onClick={toggleDrawer(false)}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>

            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={handleDialogOpen}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>

      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemText primary="Dark Mode" />

          <Switch
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
        </ListItem>
      </List>

    </Box>
  );


  // ==================================
  // MAIN UI
  // ==================================

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: darkMode
          ? 'grey.900'
          : 'background.default',
        color: darkMode
          ? 'common.white'
          : 'common.black'
      }}
    >

      {/* =============================
          APP BAR
      ============================= */}

      <AppBar position="static">
        <Toolbar>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Enhanced MUI React Page
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Button>

          <Button
            color="inherit"
            onClick={handleDialogOpen}
          >
            Contact
          </Button>

        </Toolbar>
      </AppBar>


      {/* =============================
          NAVIGATION DRAWER
      ============================= */}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>


      {/* =============================
          PAGE ROUTING
      ============================= */}

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={

            <Container
              component="main"
              sx={{
                mt: 8,
                mb: 2,
                flex: 1
              }}
            >

              <Typography
                variant="h2"
                component="h1"
                gutterBottom
              >
                Welcome to COS30049 -
                COS30049 is Fun
              </Typography>

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
              >
                This page showcases various
                Material-UI components.
              </Typography>


              {/* FEATURE CARDS */}

              <Grid
                container
                spacing={4}
                sx={{ mt: 4 }}
              >

                {[1, 2, 3].map((card) => (

                  <Grid
                    key={card}
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4
                    }}
                  >

                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >

                      <CardContent
                        sx={{ flexGrow: 1 }}
                      >

                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Feature {card}
                        </Typography>

                        <Typography>
                          This card demonstrates
                          MUI's Card component.
                          It is useful for displaying
                          content in an organized way.
                        </Typography>

                        <LinearProgress
                          sx={{ mt: 2 }}
                          variant="determinate"
                          value={card * 33}
                        />

                      </CardContent>

                      <Box sx={{ p: 2 }}>
                        <Button
                          size="small"
                          variant="contained"
                        >
                          Learn More
                        </Button>
                      </Box>

                    </Card>

                  </Grid>

                ))}

              </Grid>


              {/* NEWSLETTER FORM */}

              <Box sx={{ mt: 4 }}>

                <TextField
                  fullWidth
                  label="Subscribe to our newsletter"
                  variant="outlined"
                  sx={{
                    bgcolor: darkMode
                      ? 'background.paper'
                      : 'transparent'
                  }}
                />

                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Subscribe
                </Button>

              </Box>


              {/* CHIPS */}

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 2
                }}
              >

                <Chip
                  label="React"
                  color="primary"
                />

                <Chip
                  label="Material-UI"
                  color="secondary"
                />

                <Chip
                  label="Web Development"
                  color="success"
                />

                <Chip
                  avatar={<Avatar>JS</Avatar>}
                  label="JavaScript"
                  variant="outlined"
                />

              </Box>

            </Container>

          }
        />


        {/* ABOUT PAGE */}

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>


      {/* =============================
          FOOTER
      ============================= */}

      <Box
        component="footer"
        sx={{
          bgcolor: darkMode
            ? 'grey.800'
            : 'background.paper',
          py: 6,
          mt: 'auto'
        }}
      >

        <Container maxWidth="lg">

          <Typography variant="body1">
            Enhanced MUI React Page Footer
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: darkMode
                ? 'grey.300'
                : 'text.secondary'
            }}
          >
            Copyright © {new Date().getFullYear()}
          </Typography>

        </Container>

      </Box>


      {/* =============================
          FLOATING ACTION BUTTON
      ============================= */}

      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
      >
        <AddIcon />
      </Fab>


      {/* =============================
          SNACKBAR
      ============================= */}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >

        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>

      </Snackbar>


      {/* =============================
          CONTACT DIALOG
      ============================= */}

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
      >

        <DialogTitle>
          Contact Us
        </DialogTitle>

        <DialogContent>

          <DialogContentText>
            Fill out this form to get in
            touch with us.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

        </DialogContent>

        <DialogActions>

          <Button
            onClick={handleDialogClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? <CircularProgress size={24} />
              : 'Submit'}
          </Button>

        </DialogActions>

      </Dialog>

    </Box>
  );
}

export default App;
