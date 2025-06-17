import './App.css';
import { useTranslation } from "react-i18next";
import VehicleSlider from './components/vehicleSlider/vehicleSlider';
import TrustPilotComponent from './components/trustpilot/trustpilot';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h2>{t('Welcome to React')}</h2>
      <VehicleSlider />
      <TrustPilotComponent />
    </div>
  );
}

export default App;
