// 1. Crear el Contexto → Es como comprar un Echo Dot
const EchoDotContext = React.createContext();

// 2. Crear el Provider → Le decimos al Echo Dot que queremos escuchar “Bohemian Rhapsody”
const EchoDotProvider = ({ children }) => {
  const [cancion, setCancion] = React.useState("Bohemian Rhapsody");

  return <EchoDotContext.Provider value={{ cancion, setCancion }}>{children}</EchoDotContext.Provider>;
};

// 3. Envolver la App con el Provider → Ponemos el Echo Dot en el salón y en la cocina para que toda la casa pueda acceder a la música
const App = () => (
  <EchoDotProvider>
    <Salon />
    <Cocina />
  </EchoDotProvider>
);

// 4. Usar el Contexto con useContext → En cualquier habitación puedes decir "Alexa, pon música" y sonará la canción
const Salon = () => {
  const { cancion } = React.useContext(EchoDotContext);
  return <h1> Sonando en el salón: {cancion}</h1>;
};
