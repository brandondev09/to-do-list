import React from 'react'

export default function About() {
  return (
    <React.Fragment>
        <h1 style={hStyle} >About</h1>
        <p style={aboutStyle} >This is the TodoList app v1.0.0. My first React app. All credits to Traversy Media. Check out his youtube channel
            <a style={youtubeLink} href='https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA'> here.</a>
        </p>
    </React.Fragment>
  )
}

const hStyle= {
    textDecoration:'underline',
    textAlign:'center',
    paddingTop:'75px'
}

const aboutStyle= {
    textAlign:'center',
    paddingTop:'50px'
}

const youtubeLink= {
    color:'blue'
}
