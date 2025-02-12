import axios from "axios";
import { atom, selector } from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
            const response = await axios.get("http://localhost:3001/notifications");
            return response.data;
        }
    })
});

export const meSelector = selector({
    key: "meSelector",
    get: ({ get }) => {
        const { network, jobs, notifications, messages } = get(notificationsAtom);
        return network + jobs + notifications + messages;
    }
});
