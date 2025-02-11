import { useRecoilValue } from "recoil"
import { jobsAtom, meSelector, messagingAtom, networkAtom, notificationsAtom } from "./atoms";

function App() {

  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const notifications = useRecoilValue(notificationsAtom);
  const messaging = useRecoilValue(messagingAtom);
  const meSelect = useRecoilValue(meSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My Network ({network >= 100 ? "99+" : network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({notifications})</button>
      <button>Notifications ({messaging})</button>

      <button>Me ({meSelect})</button>
    </>
  )
}

export default App
