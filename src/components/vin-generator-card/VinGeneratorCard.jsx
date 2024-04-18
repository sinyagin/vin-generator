import {VinGeneratorHeader} from "../vin-generator-header/VinGeneratorHeader";
import {VinGeneratorBody} from "../vin-genrator-body/VinGeneratorBody";
import {VinGeneratorFooter} from "../vin-generator-footer/VinGeneratorFooter";

import s from './style.module.css'
import {useState} from "react";


export function VinGeneratorCard() {
    const [vin, setVin] = useState('VIN Will Appear Here');
    return <div className={s.root}>
        <div className={s.main}>
            <VinGeneratorHeader/>
            <VinGeneratorBody onSubmit={setVin}/>
        </div>
        <VinGeneratorFooter vin={vin}/>
    </div>
}