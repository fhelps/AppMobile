import JobList from './components/JobList';
import {createStackNavigator} from 'react-navigation';
import JobDetails from './components/JobDetails';

export default createStackNavigator(
      {JobList: JobList, JobDetails: JobDetails },
      {initialRouteName: 'JobList'}
  )