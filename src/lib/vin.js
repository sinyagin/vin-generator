export async function fetchVin() {
    try {
        const response = await fetch('https://randomvin.com/getvin.php?type=real');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        console.log('VIN:', data);
        return data;
    } catch (error) {
        console.error('Could not fetch the VIN:', error);
    }
}

export function generateRandomVIN() {
    var letters = 'ABCDEFGHJKLMNPRSTUVWXYZ';
    var numbers = '1234567890';
    var characters = letters + numbers;

    // Create an array to store the VIN digits
    var vinArray = [];

    // Generate first 3 characters (WMI - World Manufacturer Identifier)
    for (var i = 0; i < 3; i++) {
        vinArray.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }

    // Generate next 5 characters (VDS - Vehicle Descriptor Section)
    for (var i = 0; i < 5; i++) {
        vinArray.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    // Generate next 8 characters (VIS - Vehicle Identifier Section)
    for (var i = 0; i < 8; i++) {
        vinArray.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    // Generate check digit (9th character)
    var weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 17; i++) {
        sum += (characters.indexOf(vinArray[i]) % 10) * weights[i];
    }
    var checkDigit = sum % 11;
    if (checkDigit === 10) {
        vinArray.push('X');
    } else {
        vinArray.push(checkDigit.toString());
    }

    // Convert the array to string and return
    return vinArray.join('');
}