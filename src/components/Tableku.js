import { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";

const Tableku = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setItems(res.data);
    });
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, []);
  return (
    <>
      <h3 className="text-center">Tabel User</h3>
      <div className="card">
        <table id="example" className="table w-100 text-nowrap text-center table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone Number</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {items.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.email}</td>
                <td>{result.username}</td>
                <td>{result.phone}</td>
                <td>
                  <a href="#" className="btn btn-outline-primary btn-detail btn-pengajuan">
                    <i className="material-icons mr-2">info</i> Detail
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tableku;
