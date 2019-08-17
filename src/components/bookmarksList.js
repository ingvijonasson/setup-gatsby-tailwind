import React from 'react';

const BookmarksList = () => {
  const elements = ['one', 'two', 'three'];

  return (
    <ul>
      {elements.map((value, index) => {
        return (
          <li key={index}>
            <article>
              <h3> {value} Bookmark title</h3>
              <p>{index} - lorem ipsum description</p>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default BookmarksList
