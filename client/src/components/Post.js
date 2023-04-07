import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
  
} from "@mui/material";

import Comment from "./Comment";
import AddComments from "./AddComments";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="XYZ"
        subheader="January 14, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://qph.cf2.quoracdn.net/main-qimg-5a8b414b91e3d13556a9115df11d4d2e.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt dicta distinctio necessitatibus, illo delectus id rem labore aut libero!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
       
      </CardActions>
      <AddComments/>
      <Comment/>
    </Card>
  );
};

export default Post;
