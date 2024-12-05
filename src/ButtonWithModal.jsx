import Model from './Model';
import useModel from './hooks/useModel';

export default function ButtonWithModal() {
  const { isOpenModel , open , close } = useModel();

  return (
    <>
      {!isOpenModel && (
        <button onClick={open}>Open Model</button>
      )}

      {isOpenModel && <Model close={close} />}
    </>
  );
}
