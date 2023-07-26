import LandingPage from '@/features/landing/pages/LandingPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';
import FollowingPage from '@/features/following/pages/FollowingPage';
import ExplorePage from '@/features/explore/pages/ExplorePage';
import { useEffect } from 'react';

interface Props {}

const MainLayout = (props: Props) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname.slice(1);

    useEffect(() => {
        navigate(pathname);
    }, []);

    return (
        <div className="layout">
            <Header />
            <div className="layout__body">
                <SideBar />
                <div className="layout__content">
                    <Routes>
                        <Route path="" element={<LandingPage />} />
                        <Route path="following" element={<FollowingPage />} />
                        <Route path="explore" element={<ExplorePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
