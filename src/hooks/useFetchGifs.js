import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getgifs';


export const useFetchGifs = (category ) => {
    
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs( category );
        setimages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);
        

return {
    images, //si tiene el mismo nombre se de deja solo uno , por ejemplo images: images,
    isLoading
}

}
