import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs Fetch', () => {
    
    test('Debe de tener 10 elementos', async() => {

        const gifs = await getGifs('One Punch');
        
        expect(gifs.length).toBe(10);
        
    })

    test('Debe de tener 0 elementos', async() => {

        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0);
        
    })
    
})
