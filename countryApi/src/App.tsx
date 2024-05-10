import './App.css';
import { useGetCountryQuery } from './redux/countrySlice';

function App() {
  const { data, error, isLoading } = useGetCountryQuery();

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {data.map((d, i) => (
              <div
                style={{
                  padding: '10px',
                  backgroundColor: 'gray',
                  margin: '10px',
                  color: 'white',
                  width: '25%',
                  display: 'flex',
                  flexDirection: 'column', // Set the flex direction to column
                }}
                key={i}
              >
                <img src={d.flags.png} alt='' />
                <p>Name: {d.name.common}</p>
                <p>Capital: {d.capital}</p>
                <p>Area: {d.area}</p>
                {d.borders && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <p>Borders:</p>
                    {d.borders.map((border, i) => (
                      <p style={{ marginLeft: '5px' }}>{border}</p>
                    ))}
                  </div>
                )}
                <p>Independent: {d.independent ? 'yes' : 'no'}</p>
                {d.currencies && (
                  <ul>
                    {Object.keys(d.currencies).map((code) => (
                      <p key={code}>
                        <strong>{code}</strong>: {d.currencies[code].name} (
                        {d.currencies[code].symbol})
                      </p>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
