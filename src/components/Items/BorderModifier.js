import React from 'react'
import Card from '../UI/Card'
import Property from './Property'

import styles from './BorderModifier.module.css'

const BorderModifier = (props) => {
  return (
    <Card>
      <section className={styles.box}>
        <Property className={styles['item-1']}>
          <label>border top left radius</label>
          <input
            placeholder=" 0 px"
            type="text"
            onChange={props.onChangeLeftTop}
            maxLength={3}
          />
        </Property>

        <Property className={styles['item-2']}>
          <label>border top right radius</label>
          <input
            placeholder=" 0 px"
            type="text"
            onChange={props.onChangeRightTop}
            maxLength={3}
          />
        </Property>
        <Property className={styles['item-img']}>
          <img
            src="https://thumbs.dreamstime.com/b/alba-iulia-vauban-style-medieval-walled-fortress-aerial-view-sunset-95913911.jpg"
            style={{
              borderTopLeftRadius: `${props.leftTop}px`,
              borderTopRightRadius: `${props.rightTop}px`,
              borderBottomLeftRadius: `${props.leftBottom}px`,
              borderBottomRightRadius: `${props.rightBottom}px`,
            }}
            alt="alt"
          />
        </Property>

        <Property className={styles['item-3']}>
          <input
            placeholder=" 0 px"
            type="text"
            onChange={props.onChangeLeftBottom}
            maxLength={3}
          />
          <label>border bottom left radius</label>
        </Property>
        <Property className={styles['item-4']}>
          <input
            placeholder=" 0 px"
            type="text"
            onChange={props.onChangeRightBottom}
            maxLength={3}
          />
          <label>border bottom right radius</label>
        </Property>
      </section>
    </Card>
  )
}

export default BorderModifier
