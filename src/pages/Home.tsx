import { useEffect, useState } from 'react';
import { api } from '../api';
import { AlbumItem } from '../components/Album';
import { Album } from '../types/Album';

export const Home = () => {
    const [, setLoading] = useState(false);
    const [list, setList] = useState<Album[]>([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setList( albums );
        setLoading(false);
    }

    return (
        <div>

            {list.map((item, index) => (
                <AlbumItem
                    key={index}
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
    );
}