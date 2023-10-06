import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header';
import CenteredTabs from './components/CenteredTabs';
import theme from '@mui/material/styles/defaultTheme';
import ToggleColorMode from "./styles/Theme";
export default function Home() {
  return (
    <main>

        <ToggleColorMode>
            <Header/>
            <CenteredTabs/>
        </ToggleColorMode>
    </main>
  )
}
