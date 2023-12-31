import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const BtnDATA = [
  { name: "All" },
  { name: "Active" },
  { name: "Completed" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App name="장하영" tasks={DATA} btnName={BtnDATA} />
   </React.StrictMode>
 );
