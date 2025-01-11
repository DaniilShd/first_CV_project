import { Route , Routes} from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';

const AppRouter = () => {
   
  return (
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/main" element={<Main/>} />
    <Route path="/about" element={<About/>} />
    </Routes>
      );
  }
  
  export default AppRouter;