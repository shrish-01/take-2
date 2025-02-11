import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const meSelector = selector({
    key: "meSelector",
    // get should be a function receiving an object { get }
    get: ({ get }) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const notifications = get(notificationsAtom);
        const messaging = get(messagingAtom);

        return (network+jobs+notifications+messaging);
    }
});