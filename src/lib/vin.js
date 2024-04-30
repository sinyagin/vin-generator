const unknownVINs = ['BBBKN3DDXE0344466', 'MMXKN3DD3E0344488', 'JTHCE1BL5E5082733'];

const autoVINs = ['1P4GP44R1XB515884', '1G6KD54Y01U281515', 'WDBUF87X07X217663', '1FTFX1EF2DFC03743', '1GYEC63N46R109616',
    '2C3HD56T4TH228996', '1B8HS48N72F135363', '5GTDN136468196228', '1FAHP2EW0CG128926', 'JF1GPAC68E8278613', '1NXBR32E86Z706347',
'1GNEK13T3YJ209399', 'KNDMB233266074023', '1GNWGPFG8B6548273'];

const mcyVINs = ['19XFB6E5XF1234567', '19XFC1F91M1234567', '19XFC2F50H1234567', '1AMEC9637D1234567', '1B3BA54E3H1234567',
    '1B3BD46DXF1234567', '1B3BE46K3G1234567', '1B3BP68J4N1234567', '1B3BZ44A5G1234567', '5YFEPMAE7MP250544', '5YJYGDEE3MF071288',
    'JM1BF2221J0125754', '1FABP42EXHF256293'];

const velVINs = ['WB30C1905L1645892', '1B91ABH1XV1234567', '538SDJZ69L5687469', 'JH2SC2403R1269856', 'MH3RH15Y1K1155997',
    'ZDM1RADW3D1472583', '1A9SC022731269856', '1A9SC033831269856', '1A9SC066031269856', '1A9SG022321269856', '1A9SJ022121269856',
    '1A9SJ022121269856', '1A9SJ033221269856', '1A9SJ033723269856', '1A9SR022333269856', '1A9SR033433269856', '1A9SX022823269856',
    '1A9SY022123269856', '1A9SY022X33269856'];


export function generateVin(config) {
    switch (config.vinType) {
        case 'unknown':
            return getRandomElementFromArray(unknownVINs)
        case 'auto':
            return getRandomElementFromArray(autoVINs)
        case 'mcy':
            return getRandomElementFromArray(mcyVINs)
        case 'vel':
            return getRandomElementFromArray(velVINs)
        default:
            throw new Error(`Unsupported vin type: ${config.vinType}`);
    }
}

function getRandomElementFromArray(vins) {
    if (!Array.isArray(vins) || vins.length === 0) {
        throw new Error('Invalid vins');
    }

    const randomIndex = Math.floor(Math.random() * vins.length);
    return vins[randomIndex];
}