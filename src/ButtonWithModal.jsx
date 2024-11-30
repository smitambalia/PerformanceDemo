import { useState } from 'react'
import Model from './Model';

export default function ButtonWithModal() {
  const [isOpenModel, setIsOpenMode] = useState(false);

  return (
    <>
      {!isOpenModel && (
        <button onClick={() => setIsOpenMode(true)}>Open Model</button>
      )}

      {isOpenModel && <Model setIsOpenMode={setIsOpenMode} />}
    </>
  );
}
