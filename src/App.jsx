import { useState } from "react";
import User from "./User";
import CustomButton from "./shared/CustomButton";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "tariq", email: "tariq@gmail.com", isBlocked: true },
    { id: 2, name: "anas", email: "anas@gmail.com", isBlocked: false },
    { id: 3, name: "hala", email: "thalaariq@gmail.com", isBlocked: true },
    { id: 4, name: "asmaa", email: "asmaa@gmail.com", isBlocked: true },
    { id: 5, name: "samah", email: "samah@gmail.com", isBlocked: true },
  ]);

  return (
    <div className="Users">
    <CustomButton text = "Add" type = "primary"/>
    <User name = 'tariq' email = 'tariq@gmail.com' />
    <User name = 'anas' email = 'anas@gmail.com' />
    <User name = 'hala' email = 'thalaariq@gmail.com' />
    <User name = 'asmaa' email = 'asmaa@gmail.com' />
    <User name = 'samah' email = 'samah@gmail.com' />
    </div>
  );
}

export default App;
