import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section.jsx";

function App() {
  return (
    <div className="app">
      <h1>Learning Profile</h1>
      
      <ProfileCard
        name="Sahar Raihani"
        role="React Beginner"
        imageUrl=""
      />

      <Section title="About">
        <p>Learning React step by step and tracking progress.</p>
      </Section>

      <Section title="Goals">
        <p>Understand components, props and composition.</p>
      </Section>
    </div>
  );
}

export default App;
