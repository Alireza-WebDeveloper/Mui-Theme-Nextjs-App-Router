'use client';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  Button,
  CardContent,
  Box,
  Typography,
  Container,
} from '@mui/material';
import Image from 'next/image';
import { ButtonGroup } from '@mui/material';

type LoadImageType = {
  src: any;
  quality: any;
  width: any;
};

const LoadImage = ({ src, width, quality }: Partial<LoadImageType>) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Product = () => {
  return (
    <Container>
      <Grid container p={2} gap={2}>
        {/* Product 1  */}
        <Grid item lg={4}>
          <Card>
            <Box
              component="section"
              sx={{
                height: { md: '45vh', xs: '60vh' },
                position: 'relative',
              }}
            >
              <Image
                loader={LoadImage}
                src={'Images/1.png'}
                alt={'image'}
                fill
                style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
                priority
                sizes="(max-width: 1200px) 100vw"
              />
            </Box>
            <CardContent>
              <Typography variant="h6" component="h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                autem eius, nulla velit ab quas! Laborum, ipsum nam. Magni ullam
                eaque facere aliquam molestias asperiores neque itaque
                laboriosam eveniet exercitationem!
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup>
                <Button size="large" variant="contained" color="warning">
                  detail
                </Button>
                <Button size="large" variant="contained" color="primary">
                  buy
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
        {/* Product 2 */}
        <Grid item lg={4}>
          <Card>
            <Box
              component="section"
              sx={{
                height: { md: '45vh', xs: '60vh' },
                position: 'relative',
              }}
            >
              <Image
                loader={LoadImage}
                src={'Images/2.png'}
                alt={'image'}
                fill
                style={{ objectFit: 'fill', borderRadius: '0.3rem' }}
                priority
                sizes="(max-width: 1200px) 100vw"
              />
            </Box>
            <CardContent>
              <Typography variant="h6" component="h1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                dignissimos consectetur reiciendis enim blanditiis at.
                Aspernatur magnam in dolorum enim earum beatae, id ut debitis
                ipsum, recusandae saepe corrupti ratione!
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup>
                <Button size="large" variant="contained" color="warning">
                  detail
                </Button>
                <Button size="large" variant="contained" color="primary">
                  buy
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
