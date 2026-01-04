import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section.jsx";
import StatItem from "./components/StatItem.jsx";
import ProgressBar from "./components/ProgressBar.jsx";

function App() {
  return (
    <div className="app">
      <h1>Learning Profile</h1>
      
      <ProfileCard
        name="Sahar Raihani"
        role="React Beginner"
        imageUrl=""
      />

      <Section title="Stats">
        <StatItem label="Level" value="Beginner" />
        <StatItem label="XP" value="120" />
        <StatItem label="Streak" value="5 days" />
      </Section>

      <Section title="Goals">
        <p>Understand components, props and composition.</p>
      </Section>

      <Section title="React Progress">
        <ProgressBar percent={35} />
      </Section>
    </div>
  );
}

export default App;
