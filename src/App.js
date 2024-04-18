import {VinGeneratorCard} from "./components/vin-generator-card/VinGeneratorCard";
import s from './style.module.css'

function App () {
    return <div className={s.root}>
        <VinGeneratorCard/>
    </div>
}

export default App;