import { getCLS, getFCP, getLCP, getFID, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getFID(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
