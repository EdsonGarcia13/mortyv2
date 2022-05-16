
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";
import Searchs from "../components/Search/Searchs";


const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);
  let [searchs, setSearchs] = useState("");
  
  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);


  let ap = `https://rickandmortyapi.com/api/location/${searchs}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(ap).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [ap]);





  console.log();
  return (
    <div className="container">
      <div className="container2">
      <Searchs setSearchs={setSearchs} />
        <h1 className="text-center text-white mb-3">
          Location :
          <span className="text-white">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-white">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center text-white">Type: {type === "" ? "Unknown" : type}</h6>
        <h6 className="text-center text-white">Number of inhabitants: {results.length}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center text-white mb-4">Dimensions</h4>

          <InputGroup name="Dimension" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
