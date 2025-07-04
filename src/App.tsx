import './App.css';
import { useTranslation } from "react-i18next";
import VehicleSlider from './components/vehicleSlider/vehicleSlider';
import TrustPilotComponent from './components/trustpilot/trustpilot';
import FAQ from './components/FAQ/faq';
import AirportTerminal from './components/airportTerminal/AirportTerminal';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h2>{t('Welcome to React')}</h2>
      <VehicleSlider />
      <TrustPilotComponent />
      <FAQ title='Cancun airport transfers FAQ' />
      <AirportTerminal />
    </div>
  );
}

export default App;
