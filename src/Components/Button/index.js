import React from 'react';

 import'./styles';

function Button({name}) {
  return <button className="btn">
  {name}
</button>
}

export default Button;