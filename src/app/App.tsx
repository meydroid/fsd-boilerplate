import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TaskListPage } from '../pages/task-list';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskListPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
