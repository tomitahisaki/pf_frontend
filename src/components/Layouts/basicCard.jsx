import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" noWrap>
          タイトル:{props.title}
        </Typography>
        <Typography variant="body2" noWrap>
          説明:{props.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} noWrap>
          ステータス:{props.status}
        </Typography>
        <Typography sx={{ mb: 1.5 }} noWrap>
          作成日:{props.created_at}
        </Typography>
        <Typography sx={{ mb: 1.5 }} noWrap>
          更新日:{props.updated_at}
        </Typography>
      </CardContent>
    </Card>
  );
}
