// 방법 1
// import React from 'react';

// function GroceryItem(props) {

//     return (
//         <li>
//             <strong>{props.name}</strong>
//             <span>{props.count}</span>
//         </li>
//     );
// }

// export default GroceryItem;

// 방법 2
import React from 'react';

function GroceryItem({ name, count }) {
  return (
    <li>
      <strong>{name}</strong>
      <span>{count}</span>
    </li>
  );
}

export default GroceryItem;
