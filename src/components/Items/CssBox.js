import React, { useState } from 'react'
import BorderModifier from './BorderModifier'

import styles from './CssBox.module.css'

const CssBox = () => {
  const [leftTop, setLeftTop] = useState('0')
  const [rightTop, setRightTop] = useState('0')
  const [bottomLeft, setBottonLeft] = useState('0')
  const [bottomRight, setBottomRight] = useState('0')

  const changeLeftTop = (event) => {
    if (event.target.value.trim() === '') {
      setLeftTop('0')
    } else {
      setLeftTop(event.target.value)
    }
  }

  const changeRightTop = (event) => {
    if (event.target.value.trim() === '') {
      setRightTop('0')
    } else {
      setRightTop(event.target.value)
    }
  }
  const changeLeftBottom = (event) => {
    if (event.target.value.trim() === '') {
      setBottonLeft('0')
    } else {
      setBottonLeft(event.target.value)
    }
  }
  const changeRightBottom = (event) => {
    if (event.target.value.trim() === '') {
      setBottomRight('0')
    } else {
      setBottomRight(event.target.value)
    }
  }

  return (
    <div className={styles.layout}>
      <div className={styles.box}>
        <p>border-radius-top-left: {leftTop}px</p>
        <p>border-radius-top-right: {rightTop}px</p>
        <p>border-radius-bottom-left: {bottomLeft}px</p>
        <p>border-radius-bottom-right: {bottomRight}px</p>
      </div>
      <BorderModifier
        onChangeLeftTop={changeLeftTop}
        onChangeRightTop={changeRightTop}
        onChangeLeftBottom={changeLeftBottom}
        onChangeRightBottom={changeRightBottom}
        leftTop={leftTop}
        rightTop={rightTop}
        leftBottom={bottomLeft}
        rightBottom={bottomRight}
      />
    </div>
  )
}

export default CssBox
