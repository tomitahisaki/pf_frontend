import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="sample"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" noWrap>
          タイトル:{props.todoDetail.title}
        </Typography>
        <Typography variant="body2" gutterBottom noWrap>
          説明:{props.todoDetail.description}
        </Typography>
        <Typography variant="button" display="block" gutterBottom noWrap>
          ステータス:{props.todoDetail.status}
        </Typography>
        <Typography variant="overline" display="block" gutterBottom noWrap>
          作成日:{props.todoDetail.created_at}
        </Typography>
        <Typography variant="overline" display="block" gutterBottom noWrap>
          更新日:{props.todoDetail.updated_at}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/todos/${props.todoDetail.id}`} size="small">
          Edit
        </Link>
        <Link href="/todos" size="small">
          Back
        </Link>
      </CardActions>
    </Card>
  );
}
