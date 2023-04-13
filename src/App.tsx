import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UserNameContextProvider } from "./context/userNameContext";

function App() {
  return (
    <div className="w-full min-h-screen relative font-sans flex items-center justify-center bg-gray500">
      <UserNameContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserNameContextProvider>
        
    </div>
  );
}

export default App;
