interface Props {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
}

export const Counter: React.FC<Props> = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <div className="App">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 d-flex justify-content-center">
          <h1 className="App__title">
            {'Count: '}
            {count}
          </h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 d-flex justify-content-around">
          <button
            type="button"
            onClick={addOne}
            className="btn btn-primary"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={add100}
            className="btn btn-primary"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={increase}
            className="btn btn-primary"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  </div>
);
