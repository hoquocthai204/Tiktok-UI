import LandingPage from '@/features/landing/pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';

interface Props {}

const MainLayout = (props: Props) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout__body">
                <SideBar />
                <div className="layout__content">
                    <Routes>
                        <Route path="" element={<LandingPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
