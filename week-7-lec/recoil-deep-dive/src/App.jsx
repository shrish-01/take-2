import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { meSelector, notificationsAtom } from "./atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [notifications, setNotifications] = useRecoilState(notificationsAtom);
  const meSelect = useRecoilValue(meSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({notifications.network >= 100 ? "99+" : notifications.network})</button>
      <button>Jobs ({notifications.jobs})</button>
      <button>Messaging ({notifications.messages})</button>
      <button>Notifications ({notifications.notifications})</button>

      <button>Me ({meSelect})</button>
    </>
  )
}

export default App
