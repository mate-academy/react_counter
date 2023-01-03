import React from 'react';
import './App.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (

      <div className="App">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              // eslint-disable-next-line max-len
              image="https://cutt.ly/U2gHaFs"
              alt="counter"
            />
            <CardContent>
              <Typography
                className="App__title"
                gutterBottom
                variant="h2"
                component="div"
              >
                {`Count: ${count}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Stack spacing={2} direction="row">
                  <Button
                    type="button"
                    variant="contained"
                    className="App__add-one"
                    onClick={this.addOne}
                  >
                    Add 1
                  </Button>

                  <Button
                    type="button"
                    variant="contained"
                    className="App__add-100"
                    onClick={this.add100}
                  >
                    Add 100
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    className="App__increase"
                    onClick={this.increase}
                  >
                    Increase
                  </Button>
                </Stack>

              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}
