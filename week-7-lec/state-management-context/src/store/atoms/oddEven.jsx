import { atom } from "jotai";
import { countAtom } from "./count";

export const oddEvenAtom = atom((get) => {
    const count = get(countAtom);
    return count === 0 ? 'neither even nor odd!' : (count % 2 === 0 ? 'even.' : 'odd.')
});