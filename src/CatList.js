import React from 'react'

export default function CatList(props) {
  return (
    <div className="cat-list">
      {props.catPics.map(catPic => {
        return <img key={catPic.id} className="cat-img" src={catPic.url} />
      })}
    </div>
  )
}
