/**
 * Module dependencies.
 */

import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import boardGames from 'src/data/board-games';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Header } from 'src/components';

/**
 * Shelf.
 */

const Shelf = () => {
  const isSm = useMediaQuery('(max-width:600px)');
  const snCols = isSm && 1;

  return (
    <>
      <Header title="Shelf" />
      <ImageList gap={5} sx={{ margin: 0, width: 1 }} cols={snCols || 5}>
        {boardGames.map(({ cols = 1, img, rows = 1, title }) => (
          <ImageListItem key={img} cols={snCols || cols} rows={snCols || rows}>
            <Image
              alt={title}
              width={snCols || cols}
              height={snCols || rows}
              src={img}
              loading="lazy"
              objectFit="cover"
              layout="responsive"
            />
            <ImageListItemBar title={title} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

/**
 * Export Shelf.
 */

export default Shelf;
