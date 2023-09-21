import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Link from "next/link";
import styles from "@/components/Layouts/basicGrid.module.scss";

export function BasicGrid(props) {
  const todosArray = Array.from(props.ary);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {todosArray.map((todo, index) => (
            <Grid key={index} item xs={6}>
              <Link href={`todos/${todo.id}`} className={styles.anchor}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div" noWrap>
                      タイトル:{todo.title}
                    </Typography>
                    <Typography variant="body2" noWrap>
                      説明:{todo.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} noWrap>
                      ステータス:{todo.status}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} noWrap>
                      作成日:{todo.created_at}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} noWrap>
                      更新日:{todo.updated_at}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
