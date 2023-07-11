// <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"></img> */}
   import {
    Box,
    Container,
    Typography,
    createStyles,
    withStyles,
     } from "@material-ui/core";
    import React, { Component } from "react";
  
   const styles = createStyles({
    mainContainer: {
          
          width:'44%',

          justifyContent: "space-evenly",
          
         backgroundColor: "lightgrey",

    },
    flexContainer: {
       
      display: "flex",   
      alignItems:'center',
      margin: '20px',
      flexWrap: 'wrap',
    },
    flexItem: {
      width: '300px',
      margin: '10px',
    
    },
    imgStyle: {
      height: "300px",
      width: "100%",
      objectFit: 'cover',
      borderRadius: '5px',
      
    },

  });
      
  class Home extends Component {     
    render() {
      const { classes }: any = this.props;
      return (
        <Container   className={classes.mainContainer}>
        
          <Box className={classes.flexContainer}>
            <div className={classes.flexItem}>
              <Typography> <strong>A Message</strong> </Typography>
              <Typography> <strong> From Our CEO </strong></Typography>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore quas sapiente, qui omnis cupiditate, odit provident unde
                inventore ad ipsa illo veniam temp ore nesciunt, iste recusandae
                adipisci maxime ratione.
              </p>
              <Typography style={{marginLeft:'160px'}}> <strong> -Meet Basiri </strong></Typography>
            </div>
  
            <div className={classes.flexItem}>
              <img
                className={classes.imgStyle}
                src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="CEO Message"
              />
            </div>
          </Box>
          <Box className={classes.flexContainer}>
            <div className={classes.flexItem}>
              <img
                className={classes.imgStyle}
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt="Advisory Board"
              />
            </div>
                  
            <div className={classes.flexItem}>
              <Typography>Advisory Board</Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus, architecto explicabo? Voluptas, quam repudiandae.
                Impedit facere explicabo aspernatur officiis voluptatem.
              </p>
              
            </div>
          </Box>  
        </Container>
      );
    }
  }
  
  export default withStyles(styles)(Home);
  
