import ComponentChilden from './ComponentChilden';

const Home = () => {
  return (
    <div>
      <h1>Je suis un autre component</h1>
      <ComponentChilden text="Envoyé dans Parent"/>
    </div>
  );
};

export default Home;