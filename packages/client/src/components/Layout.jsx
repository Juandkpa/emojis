import Nav from '../components/Nav';
import Routes from '../Routes';

const Layout = () => {
    
    return (
        <div className="app">
            <Nav />
            <main>
                <Routes />
            </main>
        </div>        
    );
};

export { Layout as default };
