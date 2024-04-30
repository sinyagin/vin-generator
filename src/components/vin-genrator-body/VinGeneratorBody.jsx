import s from './style.module.css';
import {generateVin} from "../../lib/vin";

export function VinGeneratorBody(props) {
    const submit = (e) => {
        e.preventDefault();
        let formData = {};
        new FormData(e.currentTarget).forEach((value, key) => {
            formData[key] = value;
        });

        const generatedVin = generateVin(formData)
        props.onSubmit(generatedVin);
    }

    return <form onSubmit={submit}>
        <div className={s.grid_container}>
            <div className={s.grid_item}>
                Auto <input name='vinType' type='radio' value='auto' defaultChecked={true}/>
            </div>
            <div className={s.grid_item}>
                Motorcycle <input name='vinType' type='radio' value='mcy' defaultChecked={false}/>
            </div>
            <div className={s.grid_item}>
                Velocity <input name='vinType' type='radio' value='vel' defaultChecked={false}/>
            </div>
            <div className={s.grid_item}>
                Unknown <input name='vinType' type='radio' value='unknown' defaultChecked={false}/>
            </div>
        </div>

        <div className={s.btn_container}>
            <button type='submit' className={s.btn_generate}>GENERATE</button>
        </div>

    </form>;
}