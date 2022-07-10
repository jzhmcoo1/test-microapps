import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from 'qiankun';
import apps from './apps';

registerMicroApps(apps, {
  beforeLoad: (apps) => {
    console.log('before load', apps);
    return Promise.resolve();
  },
  afterMount: (apps) => {
    console.log('after mount', apps);
    return Promise.resolve();
  },
});
addGlobalUncaughtErrorHandler(
  (event) => {
    console.error(event);
  }
);

export default start;
