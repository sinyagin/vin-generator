import s from './style.module.css';

export function VinGeneratorBody(props) {
    const submit = (e) => {
        e.preventDefault();
        let formData = {};
        new FormData(e.currentTarget).forEach((value, key) => {
            formData[key] = value;
        });

        console.log('click');
        //props.onSubmit(generateVin(formData));
        props.onSubmit("Test Vin");
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