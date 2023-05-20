import {Route, Routes} from 'react-router-dom';
import {Layout} from 'shared/ui';
import {HomePage} from './home-page';
import {TestAnimationPage} from './test-emotion-page/ui';

export const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='test-animation' element={<TestAnimationPage />} />
        </Route>
    </Routes>
);
