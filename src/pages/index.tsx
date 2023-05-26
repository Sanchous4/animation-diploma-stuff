import {Route, Routes} from 'react-router-dom';
import {Layout} from 'shared/ui';
import {HomePage} from './home-page';
import {TestAnimationPage} from './test-emotion-page/ui';
import { DemoPage } from './demo-page';

export const AppRouter = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='test-animation' element={<TestAnimationPage />} />
            <Route path='test' element={<DemoPage />} />
        </Route>
    </Routes>
);
