import './App.css';
import Like from './components/Like';
import Dislike from './components/Dislike';
import HiddenBox from './components/HiddenBox';
import SideBar from './components/SideBar';
import LightMode from './components/LightMode';
import DarkMode from './components/DarkMode';
import EvenOdd from './components/EvenOdd';
import NumberChecker from './components/NumberChecker';
import ToggleButton from './components/ToggleButton';
import VotingEligibility from './components/VotingEligibility';
import PasswordToggle from './components/PasswordToggle';
import SquareCube from './components/SquareCube';
import CharacterCounter from './components/CharacterCounter';
import PassFail from './components/PassFail';
import ColorChanger from './components/ColorChanger';

const App = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>React State & HOC Examples</h1>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#666', borderBottom: '2px solid #333', paddingBottom: '10px' }}>HOC - Count State</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Like />
          <Dislike />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#666', borderBottom: '2px solid #333', paddingBottom: '10px' }}>HOC - Show/Hide State</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <HiddenBox />
          <SideBar />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#666', borderBottom: '2px solid #333', paddingBottom: '10px' }}>HOC - Toggle State</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <LightMode />
          <DarkMode />
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#666', borderBottom: '2px solid #333', paddingBottom: '10px' }}>State Management Components</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
          <EvenOdd />
          <NumberChecker />
          <ToggleButton />
          <VotingEligibility />
          <PasswordToggle />
          <SquareCube />
          <CharacterCounter />
          <PassFail />
          <ColorChanger />
        </div>
      </section>
    </div>
  );
};

export default App;