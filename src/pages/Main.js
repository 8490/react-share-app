import React from 'react'
import { makeStyles } from "@material-ui/core/styles";



const stylesFunc = makeStyles((theme) => ({
    wrapper: {
      marginTop: "10rem",
      height: "calc(100vh - 19.0625rem)",
      textAlign: "center",
    },
    avatar: {
      margin: "1rem auto",
      backgroundColor: theme.palette.secondary.main,
    },
  }));

function Main() {
    return (
        <div>
            MAIN PAGE
        </div>
    )
}

export default Main
