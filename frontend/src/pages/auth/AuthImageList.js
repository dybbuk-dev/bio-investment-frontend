import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "../../components/Image";

const itemData = [
    {
      img: '/tokens/token-1.png',
      title: 'Bed',
    },
    {
      img: '/tokens/token-2.png',
      title: 'Books',
    },
    {
      img: '/tokens/token-3.png',
      title: 'Sink',
    },
    {
      img: '/tokens/token-4.png',
      title: 'Kitchen',
    },
    {
      img: '/tokens/token-5.png',
      title: 'Blinds',
    },
    {
      img: '/tokens/token-6.png',
      title: 'Chairs',
    },
    {
      img: '/tokens/token-7.png',
      title: 'Laptop',
    },
    {
      img: '/tokens/token-8.png',
      title: 'Doors',
    },
    {
      img: '/tokens/token-1.png',
      title: 'Doors',
    },
    {
      img: '/tokens/token-2.png',
      title: 'Doors',
    },
    {
      img: '/tokens/token-3.png',
      title: 'Doors',
    },
  
  ];
export default function AuthImageList(){
    return(
        <Box sx={{ width: '560px', maxHeight: '120vh', overflow: 'hidden', position:'relative'}}>
        <ImageList variant="masonry"  cols={3} gap={8} sx = {{position:'absolute', right:-40, width:'100%', height:'1200px'}}>
          {itemData.map((item, index) => (
            <ImageListItem key={index}>
              <Image
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                sx={{ borderRadius: 1, mt: ((index < 4 || index >= 8) ? -4 : 0), mb: ((index < 4 || index >= 8) ? 5 : 1) }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    )
}  