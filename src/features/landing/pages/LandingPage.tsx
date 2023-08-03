import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';

import ItemContent from '../components/ItemContent';
import ItemImage from '../components/ItemImage';
import VideoContainer from '../components/VideoContainer';

interface LandingProps {}

const tagData = ['#2', '#building', '#bushcraft', '#camping', '#outdoors', '#survival'];

const LandingPage: React.FunctionComponent<LandingProps> = (props) => {
    return (
        <div className="landing">
            {[1, 2, 3, 4].map((e) => (
                <div className="landing__item-container">
                    <ItemImage
                        src={
                            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4d28a01a2d7bafde5280021c451c5afd~c5_100x100.jpeg?x-expires=1690660800&x-signature=JPpaSLzOdtq4iit2G4%2BmM9bJGz0%3D'
                        }
                    />

                    <div className="landing__item-content-container">
                        <ItemContent
                            tagData={tagData}
                            title={'myfreelife7'}
                            name={'My Free Life'}
                            description={''}
                        />

                        <div className="landing__item-music-container">
                            <Link to={''} target="_blank" rel="noopener noreferrer">
                                <MusicNoteIcon className="landing__music-link" />{' '}
                                <span>nhạc nền - My Free Life</span>
                            </Link>
                        </div>

                        <VideoContainer
                            favoriteAmount={'548.3K'}
                            messageAmount={'3763'}
                            bookmarkAmount={'25.1K'}
                            shareAmount={'6714'}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LandingPage;
