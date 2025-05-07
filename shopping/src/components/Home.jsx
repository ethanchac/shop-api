import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <main>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/shop">Shopping</Link>
            </nav>
            <h1>Home</h1>
        </main>
    );
}

export default Home;