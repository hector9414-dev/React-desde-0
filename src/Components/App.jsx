import React from 'react';
import "../styles/styles.scss";
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { getCourseList, getUserList } from '../redux/actionCreators';

store.dispatch(getCourseList())
store.dispatch(getUserList())

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
  )

export default App;
