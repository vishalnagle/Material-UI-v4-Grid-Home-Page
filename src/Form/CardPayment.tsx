import { Avatar, Box, Container, createStyles, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = createStyles({
     
  });
  class CardPayment extends Component {

     
  render() {
    const { classes }: any = this.props;
    return (
      <Container  className={classes.mainCont}>
            <Box>
              <div>
              <ArrowBackIcon  ></ArrowBackIcon>
              </div>
              <div>

              </div>
            </Box>
      </Container>
    )
  }
}

export default withStyles(styles)(CardPayment)