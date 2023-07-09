import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisibility, setalertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setalertVisibility(false)}>This is a alert</Alert>
      )}

      <Button onClick={() => setalertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
