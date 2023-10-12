import Header from './components/Header';
import CenteredTabs from './components/CenteredTabs';
import ToggleColorMode from "./styles/Theme";

export default function Home() {
  return (
    <main>

        <ToggleColorMode>
            <Header/>
            <CenteredTabs/>
            <div style={{minHeight:'50vh'}}/>
        </ToggleColorMode>
    </main>
  )
}
