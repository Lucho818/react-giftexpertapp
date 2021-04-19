import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punchman', 'One Piece', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Iron Man']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map( category => (
                        <GifGrid 
                            key={category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}