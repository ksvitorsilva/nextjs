import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import boardGames from '../data/board-games';
import { Header } from '../components';

const Shelf = () => (
  <>
    <Header title="Shelf" />
    <ImageList gap={5} sx={{ margin: 0, width: 1 }} cols={5}>
      {boardGames.map(({ cols = 1, img, rows = 1, title }) => (
        <ImageListItem key={img} cols={cols} rows={rows}>
          <Image
            alt={title}
            width={cols}
            height={rows}
            src={img}
            loading="lazy"
            objectFit="fill"
            layout="responsive"
            quality={70}
          />
          <ImageListItemBar title={title} />
        </ImageListItem>
      ))}
    </ImageList>
  </>
);

export default Shelf;
