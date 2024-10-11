import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="content">
        <Form />
      </section>
    </main>
  );
}

export default App;
