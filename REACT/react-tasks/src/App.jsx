import PropsUserCard from './components/PropsUserCard';
import Task2Button from './components/Task2Button';
import Task3Counter from './components/Task3Counter';
import Task4UserFilter from './components/Task4UserFilter';
import Task5UserForm from './components/Task5UserForm'

const App = () => {
  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>React Tasks Assignment</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Task 1: User Card</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <PropsUserCard name="John" age={25} city="Chennai"/>
          <PropsUserCard name="Jane" age={30} city="Bangalore" isAdmin={true} />
          
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Task 2: Buttons</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Task2Button
            label="Default Primary"
            onClick={() => alert('Primary Clicked')}
          />
          <Task2Button
            label="Secondary Button"
            variant="secondary"
            onClick={() => alert('Secondary Clicked')}
          />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <Task3Counter/>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <Task4UserFilter/>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <Task5UserForm/>
      </section>
    </div>
  );
}

export default App;
