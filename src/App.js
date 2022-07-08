import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainList from './components/MainList/MainList';
import Detail from './components/Detail/Detail';

function App({ store }) {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/details/:sId" element={<Detail />} />
          <Route path="/" element={<MainList />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
