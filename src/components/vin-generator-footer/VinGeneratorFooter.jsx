import s from './style.module.css'
import copyPasteIcon from '../../assets/copy-paste.svg'

export function VinGeneratorFooter(props) {

    function saveInClipboard() {
        navigator.clipboard.writeText(props.vin);
    }

    return <div className={s.root} onClick={saveInClipboard}>
        <div>{props.vin}</div>
        <img className={s.icon} src={copyPasteIcon} alt='Copy past icon'/>
    </div>
}