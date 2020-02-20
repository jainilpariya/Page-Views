import namor from 'namor'

let i;
let Data= [];
for (i=0; i<10000; i++) {
    Data[i] = {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        // statusChance: Math.random(),
        status:
        Math.random() > 0.66
                ? 'relationship'
                : Math.random() > 0.33
                    ? 'complicated'
                    : 'single'
    }
}

export default Data