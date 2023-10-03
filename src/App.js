import data from './data.js';

function App() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.coordinates?.latitude||''}</td>
              <td>{item.coordinates?.longitude||''}</td>
              <td>{item.address||'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
