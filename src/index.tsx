import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from "react-query";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();


root.render(
    <div>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>

    </div>
);
