import React from 'react';
import { GifGrid } from "../../components/GifGrid"
import {shallow} from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas al componente GifGrid', () => {
    const category = "Hola Mundo"
    
    test('Debe mostrar el componente', () => {
       
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category ={category}/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar item cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category ={category}/>);        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })
    
    

})
