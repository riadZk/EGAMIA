import React, { useState, useEffect } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
function Tables(props) {
  const [users, setUsers] = useState([]);
  const imageURL = "./images/PROJET.png"

  useEffect(() => {
    fetch("http://localhost/projet/Afficher.php")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  
  const handleDelete = (id) =>{
    axios
      .get(`http://localhost/projet/delete.php?id=${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" overflow-x-auto h-screen shadow-md bg-cover bg-center bg-no-repeat" style={
      {backgroundImage:`url(${imageURL})`}
    }>
      <Link to={'/'} className=" text-white"> 
            <BsArrowLeftCircleFill className="ml-10 mt-5" size={"20px"} />
      </Link>    
      <h2 className=" text-white text-2xl pb-10 font-momo font-serif text-center">
            tableau de bord 
      </h2>
      <table className=" text-sm w-80 md:ml-60 h-1/2 text-left">
        <thead className=" text-sx uppercase rounded-xl ">
          <tr >
            <th scope="col" className="tables2">ID</th>
            <th scope="col" className="tables2">nom</th>
            <th scope="col" className="tables2">prenom</th>
            <th scope="col" className="tables2">Email</th>
            <th scope="col" className="tables2">mobile</th>
            <th scope="col" className="tables2">coach</th>
            <th scope="col" className="tables2">action</th>
          </tr>
        </thead>
        <tbody className="rounded-xl ">
          {users.map(user => (
            <tr  key={user.id}>
              <td cope="row" className="tables">{user.id}</td>
              <td cope="row" className="tables">{user.nom}</td>
              <td cope="row" className="tables">{user.prenom}</td>
              <td cope="row" className="tables">{user.email}</td>
              <td cope="row" className="tables">{user.mobile}</td>
              <td cope="row" className="tables"><a href="#">{user.coach}</a></td>
              <td cope="row" className="tables">
              <button onClick={() => handleDelete(user.id)} className="hover:bg-slate-400 bg-slate-300 text-black w-24 h-7 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        
      </div>
    </div>
  );
}

export default Tables;
