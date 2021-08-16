import React, { useState } from 'react';
import './App.scss';
import { Card } from './Card';

const App = () => {
  const [data, setData] = useState({});
  const BASE_URL = 'https://run.mocky.io/v3';
  const request = endpoint => fetch(`${BASE_URL}${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });

  const petsData = () => request('/4b20aa37-9e1a-4155-82e0-386d171cb1f0');
  const foodData = () => request('/b0e78282-d457-4790-97f0-d5c0642bee4d');
  const plantsData = () => request('10a827d5-13b5-4cd6-a2d0-9f22dd7738d1');

  const handleClickForPets = async() => {
    const dataFromServer = await petsData()
      .then((pets) => {
      });

    const searchedData = {
      id: dataFromServer.id,
      title: dataFromServer.title,
      description: dataFromServer.description,
      image: dataFromServer.image,
      created: dataFromServer.created,
      advID: dataFromServer.advID,
    };

    setData(searchedData);
  };

  const handleClickForFood = async() => {
    const dataFromServer = await foodData()
      .then((food) => {
      });

    const searchedData = {
      id: dataFromServer.id,
      title: dataFromServer.title,
      description: dataFromServer.description,
      image: dataFromServer.image,
      created: dataFromServer.created,
      advID: dataFromServer.advID,
    };

    setData(searchedData);
  };

  const handleClickForPlants = async() => {
    const dataFromServer = await plantsData()
      .then((plants) => {
      });

    const searchedData = {
      id: dataFromServer.id,
      title: dataFromServer.title,
      description: dataFromServer.description,
      image: dataFromServer.image,
      created: dataFromServer.created,
      advID: dataFromServer.advID,
    };

    setData(searchedData);
  };

  return (
    <>
      <div className="button--container">
        <button
          className="button  first"
          type="button"
          onClick={handleClickForPets}
        >
          PETS
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickForFood}
        >
          FOOD
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickForPlants}
        >
          PLANTS
        </button>
      </div>
      <container className="container">
        {data && (
          <Card
            id={data.id}
            title={data.title}
            description={data.description}
            image={data.image}
            created={data.created}
            advID={data.advID}
          />
        )}
      </container>
    </>
  );
};

export default App;
