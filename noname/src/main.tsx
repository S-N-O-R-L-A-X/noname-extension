import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ShowAllSKills from './Views/Skills';


export const route_info = [
  {
    path: "/",
    element: <App />,
    title: "Home",
    children: [
      {
        path: "/",
        title: "首页",
      },
      {
        path: "/skills",
        title: "技能展示",
        element: <ShowAllSKills />
      },
      {
        path: "/characters",
        title: "武将展示",
        element: <ShowAllSKills />
      },
      {
        path: "/thoughts",
        title: "一些想法",
        element: <ShowAllSKills />
      },
      {
        path: "/log",
        title: "更新日志",
        element: <ShowAllSKills />
      },
    ],
  },
];

const router = createHashRouter(route_info);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
