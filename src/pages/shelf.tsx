/* eslint-disable @next/next/no-img-element */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import boardGames from '../data/board-games';
import { Header } from '../components';

const setSources = (
  image: string,
  size: number,
  rows: number,
  cols: number
) => ({
  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  srcSet: `${image}?w=${size * cols}&h=${
    size * rows
  }&fit=crop&auto=format&dpr=2 2x`,
});

const Shelf = () => (
  <>
    <Header title="Shelf" />
    <ImageList gap={6} sx={{ margin: 0, width: 1 }} variant="standard" cols={5}>
      {boardGames.map(({ cols = 1, img, rows = 1, title }) => (
        <ImageListItem key={img} cols={cols} rows={rows}>
          <img {...setSources(img, 120, rows, cols)} alt={title} />
          <ImageListItemBar title={title} />
        </ImageListItem>
      ))}
    </ImageList>
  </>
);

export default Shelf;
