import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor: 'darkcyan', padding: '10px', color: 'white'}}>
            <button onClick={() => {
            navigate('/');
            }}>Landing Page - Home</button>
            <button onClick={() => {
            navigate('/dashboard');
            }}>Dashboard</button>
        </div>
    )
}