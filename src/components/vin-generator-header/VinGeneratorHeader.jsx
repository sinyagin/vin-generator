import s from './style.module.css'
import carIcon from '../../assets/stylized-car.svg'

export function VinGeneratorHeader() {
    return <div className={s.root}>
        <div className={s.title}>VIN Generator</div>
        <img src={carIcon} className={s.icon} alt='Car icon'/>
    </div>
}