import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "./shards-dashboard/styles/shards-dashboards.1.3.1.min.css";

import Tableku from "./components/Tableku";

function App() {
  return (
    <div className="my-5">
      <div className="container">
        <Tableku />
      </div>
    </div>
  );
}

export default App;
