import { onCLS, onFID, onFCP, onLCP, onTTFB } from "web-vitals";
import { Metric } from "web-vitals";

export function reportHandler(metric: Metric) {
  console.log(metric);
}

const reportWebVitals = (onPerfEntry?: any) => {
  onCLS(onPerfEntry);
  onFID(onPerfEntry);
  onFCP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
};

export default reportWebVitals;
