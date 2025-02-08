import React, { useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { countAtom } from './store/atoms/count';
import { oddEvenAtom } from './store/atoms/oddEven';

/**
 * Things to learn:
 * RecoilRoot
 * atom
 * useRecoilState
 * useRecoilValue
 * useSetRecoilState
 * selector
 * 
 * -------------------
 * [count, setCount] = useState();
 * useRecoilState = useState
 * count = useRecoilValue
 * setCount = useSetRecoilState
 * -------------------
 * 
 * similar things when using Jotai (as Recoil throws errors with React 19)
 * useRecoilState = useAtom
 * useRecoilValue = useAtomValue
 * useSetRecoilState = useSetAtom
 */

function App() {

  return (
    <div>
      <Count />
      <OddEvenRenderer />
    </div>
  )
}

function Count() {
  return (
    console.log('Count rendered'),
    <div>
      <CountRerender />
      <Buttons />
    </div>
  )
}

function CountRerender() {
  const count = useAtomValue(countAtom);
  return (
    <div>{count}</div>
  )
}

function OddEvenRenderer() {
  const oddEven = useAtomValue(oddEvenAtom);

  return (
    <div>It is {oddEven}</div>
  )
}

function Buttons() {
  const setCount = useSetAtom(countAtom);
  console.log('Buttons rendered');
  return (
    <div>
      {/* 
        Currently used sytax is much more leaner than, onClick={function() {
          setCount((count) =>  count + 1);
        }}
      */}
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  )
}

export default App
