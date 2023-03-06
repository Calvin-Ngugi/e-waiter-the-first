import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";

const App = () => {
  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-24 p-8">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
