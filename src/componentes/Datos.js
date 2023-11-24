import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Style from './Enterprise.module.css';

// function useDatos() {
//   const [enterprise, setEmployees] = useState([]);

//   useEffect(() => {
//     fetch('json/enterprise.json')
//       .then((response) => response.json())
//       .then((input) => {
//         setEmployees(input);
//       });
//   }, []);

//   return enterprise;
// }

function useDatos() {
  const [enterprise, setEmployees] = useState([]);

  useEffect(() => {
    fetch('json/diccionario-de-datos.json')
      .then((response) => response.json())
      .then((input) => {
        console.log(input);
        setEmployees(input.EMPRESAS);
      });
  }, []);

  return enterprise;
}
const textExc =
  'https://cdn.shopify.com/s/files/1/0265/1036/0664/files/sample_excel_data.xlsx?v=1653057519';
// const useGetExcelData = () => {
//   useEffect(() => {
//     fetch(textExc)
//       .then((data) => {
//         const blb = data.json();
//         console.log(blb);
//         return blb;
//       })
//       // .then((data) => data.arrayBuffer())
//       .then((buff) => {
//         // console.log(buff);
//         const wb = XLSX.read(buff, { type: 'array' });
//         // const workbook = XLSX.read(buff, { type: 'blob' });
//         // console.log(workbook);
//         // const parsed = XLSX.read(buff);
//         // const worksheet = parsed.Sheets[parsed.SheetNames[0]];
//         // console.log(worksheet);
//       });
const useGetExcelData = (data) => {
  useEffect(() => {
    const wb = XLSX.readFile(data);
    console.log(wb);
    // const workbook = XLSX.read(data, { type: 'binary' });

    // // Assuming there's only one sheet in the Excel file
    // const sheetName = workbook.SheetNames[0];

    // const sheet = workbook.Sheets[sheetName];

    // // Convert sheet data to JSON
    // const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // console.log(jsonData);
  }, []);
};
//     // const enterprise = XLSX.read('origen-datos-junior.xlsx');
//     // console.log(enterprise);
//     // const toJSON = XLSX.utils.sheet_to_json(
//     //   enterprise.Sheets[enterprise.SheetNames[0]],
//     //   { header: 1 }
//     // );
//     // console.log('render');
//     // console.log(toJSON);
//   }, []);
// };
export default function Datos() {
  useGetExcelData(`origen-datos-junior.xlsx`);
  // const [data, setData] = useState([]);

  // const handleFileUpload = (e) => {
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(e.target.files[0]);
  //   reader.onload = (e) => {
  //     const data = e.target.result;
  //     const workbook = XLSX.read(data, { type: 'binary' });
  //     const sheetName = workbook.SheetNames[0];
  //     const sheet = workbook.Sheets[sheetName];
  //     const parsedData = XLSX.utils.sheet_to_json(sheet);
  //     setData(parsedData);
  //   };
  // };

  const enterprise = useDatos();

  return (
    <>
      <div className={Style.sun}></div>
      <h2>Mostrando data proveniente del json</h2>

      {enterprise.map}
      {/* {JSON.stringify(enterprise) || 'not found'} */}
      <div className='container'>
        <div id='accordion'>
          {enterprise.map((emp, i) => {
            return (
              <div className='card' key={`${i}`}>
                <div className='card-header' id={`heading-${i}`}>
                  <h5 className='mb-0'>
                    <button
                      className='btn btn-link'
                      data-toggle='collapse'
                      data-target={`#collapse-${i}`}
                      aria-expanded='true'
                      aria-controls={`collapse-${i}`}
                    >
                      {emp.NOMBRE_EMPRESA}
                    </button>
                  </h5>
                </div>

                <div
                  id={`collapse-${i}`}
                  className='collapse show'
                  aria-labelledby={`heading-${i}`}
                  data-parent='#accordion'
                >
                  <div className='card-body'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>nombre</th>
                        </tr>
                      </thead>
                      <tbody>
                        {emp.AREAS.map((area, j) => {
                          return (
                            <tr key={`${j}`}>
                              <td>{area.ID_AREA}</td>
                              <td>{area.NOMBRE_AREA}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div class='card'>
            <div class='card-header' id='headingOne'>
              <h5 class='mb-0'>
                <button
                  class='btn btn-link'
                  data-toggle='collapse'
                  data-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  Collapsible Group Item #1
                </button>
              </h5>
            </div>

            <div
              id='collapseOne'
              class='collapse show'
              aria-labelledby='headingOne'
              data-parent='#accordion'
            >
              <div class='card-body'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card-header' id='headingTwo'>
              <h5 class='mb-0'>
                <button
                  class='btn btn-link collapsed'
                  data-toggle='collapse'
                  data-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                >
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div
              id='collapseTwo'
              class='collapse'
              aria-labelledby='headingTwo'
              data-parent='#accordion'
            >
              <div class='card-body'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class='card-header' id='headingThree'>
              <h5 class='mb-0'>
                <button
                  class='btn btn-link collapsed'
                  data-toggle='collapse'
                  data-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                >
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id='collapseThree'
              class='collapse'
              aria-labelledby='headingThree'
              data-parent='#accordion'
            >
              <div class='card-body'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className='container' align='center'>
        <h1>List of Employees JSON</h1>

        <div className='row'>
          <div className='col-md-12'>
             <table className='table table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>ID ENTERPRISE</th>
                  <th scope='col'>NAME ENTERPRISE</th>
                </tr>
              </thead>
              <tbody>
                {enterprise?.map((item) => (
                  <tr key={item.ID_EMPRESA}>
                    <td>{item.ID_EMPRESA}</td>
                    <td>{item.NOMBRE_EMPRESA}</td>
                  </tr>
                ))}
              </tbody>
            </table> 
          </div>

          <div className={Style.frame}>
            <div className={Style.canvas}>
              <div className={Style.one}></div>
              <div className={Style.two}></div>
              <div className={Style.three}></div>
            </div>
          </div>
          <input type='file' accept='.xlsx, .xls' onChange={handleFileUpload} />

          <h1>List of Employees Excel</h1>
          {data.length > 0 && (
            <table className='table'>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div> 
      </div> */}
      <footer>
        <address>
          <section className='mt-5 mb-5'>
            <div align='center'>
              Developed by -{' '}
              <a
                href='https://www.linkedin.com/in/pablo-farias-gallardo-3355a8b8/'
                target='_blank'
              >
                Pablo Farias Gallardo
              </a>
              <br />
              santiago, chile
            </div>
          </section>
        </address>
      </footer>
    </>
  );
}
