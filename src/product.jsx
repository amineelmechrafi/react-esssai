import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container} from "@mui/material";
import {Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';





const Product = ({products,handleDelete}) => {
  
 
    

  return ( 
    <div className="mb-64">
      <Container maxWidth="md">
      <Typography variant="h3" gutterBottom align="center" color="textPrimary" >
        hello world
      </Typography>
      <Typography variant="h6" gutterBottom align="center" color="textSecondary" paragraph >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, ab fugit? Distinctio ducimus accusamus suscipit, debitis nemo culpa natus nobis tempora ratione alias quibusdam nesciunt amet molestiae dolorum quisquam expedita.
      </Typography>
      <div className="mb-5">
        <Grid container spacing={2} justify="center" align="center"  >
            <Grid item xs={6} >
            <Button variant="contained" color="success">Contained</Button>

            </Grid>
            <Grid item xs={6} >
            <Button variant="outlined">Outlined</Button>
            </Grid>
            </Grid>

        
      </div >
      <div>
      <Grid container spacing={2} justify="center" align="center"  >
        {products.map(product =>(
            <Grid item xs={4} key={product.id} >
            <Card sx={{ maxWidth: 345, }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title="product.image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" noWrap >
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"  style={{    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2, }}>
              {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=>handleDelete(product.id)} size="small">Delete</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
        ))};
    
    
      </Grid>
      </div>
      </Container>
    </div>
    

   );
  }
 
export default Product;