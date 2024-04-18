import s from './style.module.css';
import {fetchVin, generateRandomVIN} from "../../lib/vin";

export function VinGeneratorBody(props) {
    const submit = (e) => {
        e.preventDefault();
        let formData = {};
        new FormData(e.currentTarget).forEach((value, key) => {
            formData[key] = value;
        });

        console.log('click');

        /*fetchVin().then(vin => {
            // You can set the state here if you're using class components
            // or use the useState hook if you're using functional components
            console.log('Received VIN:', vin);
        });*/
        const generatedVin = generateRandomVIN()
        //props.onSubmit(generateVin(formData));
        props.onSubmit(generatedVin);
    }

    return <form onSubmit={submit}>
        <div className={s.grid_container}>
            <div className={s.grid_item}>
                Real Random VIN <input name = 'real' type='checkbox' defaultChecked={true}/>
            </div>
            <div className={s.grid_item}>
                Valid Random VIN <input name = 'number' type='checkbox' defaultChecked={false}/>
            </div>
        </div>

        <div className={s.btn_container}>
            <button type='submit' className={s.btn_generate}>GENERATE</button>
        </div>

    </form>;
}