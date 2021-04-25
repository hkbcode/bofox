import Header from './components/Header'
import MyMarkdown from './components/MyMarkdown'
import gfm from 'remark-gfm'
import { Button } from 'antd'

function App() {
  return (
    <div>
    <Button type="primary">Start Coding Now </Button>
    <Header />

    <MyMarkdown plugin={[gfm]} />
    </div>
  );
}

export default App;
