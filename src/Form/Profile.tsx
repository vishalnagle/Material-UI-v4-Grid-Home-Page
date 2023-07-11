// src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=2000"

import {
  Avatar,
  Button,
  Container,
  Grid,
  Typography,
  createStyles,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = createStyles({
  mainCont: {
    // background: "#F7F9FA",
    marginTop: "100px",
    background: "#C8C8C8",
    width: "100%"
    // height: "300px",
  },
  imgStyle: {
    width: "80px",
    height: "80px",
  },

  bthHire: {
    color: "white",
    background: "#0047AB", 
     marginTop:'25px',
    // marginLeft:'0px',
    width: "175px",
    borderRadius:'5px'
  },
  skillButton: {
    color: "white",
    background: "#004170",
    margin:'5px'
  },
  hourlyP :{
     
  
  }
});
const skills = ["PHP", "SQL", "Android", "Reactjs", "ROR"];

class Profile extends Component {
  state = {
    showAll: false,
  };
  
  handleShowAll = () => {
    this.setState({ showAll: true });
  };
  render() {
    const { classes }: any = this.props;
    const { showAll } = this.state;
    const visibleSkills = showAll ? skills : skills.slice(0, 3);
    return (
      <div>
        <Container className={classes.mainCont}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Person Image"
                    src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=2000"
                  />
                  <div
                    style={{
                      backgroundColor: "#0047AB",
                      borderRadius: "25px",
                      color: "white", 
                      alignItems: "center",
                      paddingLeft: "10px",  
                    }}
                  >
                    <Typography>Online</Typography>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <Typography>Web Designer | UI/UX Designer</Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon className={classes.Location} />
                    <Typography variant="body2">Lativa in Europe</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} className={classes.hourlyP} >
              <Typography style={{fontSize:'25px'}}> <strong> $10.00 /hr </strong></Typography>
              <Typography> Hourly Price</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={6} style={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <Typography>Has 10 relevant skills to your job</Typography>
              {visibleSkills.map((skill, index) => (
                <Button
                  key={index}
                  className={classes.skillButton}
                  variant="contained"
                   >
                  {skill}
                </Button>
              ))} 
              {!showAll && skills.length > 3 && (
                <Button onClick={this.handleShowAll}>+2</Button>
              )}
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.bthHire}> Hire</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
