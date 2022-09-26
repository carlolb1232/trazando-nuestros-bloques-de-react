import React, { Component } from 'react'
import Advertisement from './Advertisement';
import SubContents from './SubContents';
import styles from './style.module.css'

class Main extends Component {
  render() {
    return (
      <>
      <div className={styles.main}>
        <div className={styles.subContentContainer}>
          <SubContents />
          <SubContents />
          <SubContents />
        </div>
        <Advertisement />
      </div>
      </>
    )
  }
}

export default Main;