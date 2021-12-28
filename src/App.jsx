import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Thread } from './components/Thread';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Thread />
    </ThemeProvider>
  );
};

export default App;
