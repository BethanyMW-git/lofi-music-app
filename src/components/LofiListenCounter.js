import { useState } from 'react';

export default function LofiListenCounter() {
  const [listenCount, setListenCount] = useState(0);

  function increment() {
    setListenCount(listenCount + 1);
  }
//<button onClick={() => increment()}>+1</button>
  return (
    <>
      <h1>You've listened to this many Lofi Lives! : {listenCount}</h1>
    </>
  )
}
