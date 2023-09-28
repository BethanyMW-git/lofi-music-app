import { useState } from 'react';

export default function Counter() {
  const [listenCount, setListenCount] = useState(0);

  function increment() {
    setListenCount(listenCount + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <h1>You've listened to this many Lofi Lives! : {listenCount}</h1>
    </>
  )
}
