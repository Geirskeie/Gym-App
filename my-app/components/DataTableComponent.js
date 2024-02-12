import { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import {View} from "react-native";
import axios from "axios";
import ModalComponent from "./ModalComponent";


const DataTableComponent = ({ muscle, searchInput }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
      );
    const url = "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle;



    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, filteredData.length);

    const fetchData = async() => {
          try {
              const response = await axios.get(url, {
                  headers: {
                  /// Api key from ApiNinja, free to make
                      'X-Api-Key': "your api key"
                  }
              });

              const selectedItems = response.data.slice(0, 4);
              setData(selectedItems);
              setFilteredData(selectedItems);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
          console.log(filteredData);

      };

    /// Only fetch api data once
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setPage(0);
      }, [itemsPerPage]);

    useEffect(() => {
        filterData()
    }, [searchInput]);

    const filterData = () => {

        const filtered = data.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          setFilteredData(filtered);

    };



    return (
    <View style={{ backgroundColor: '#dddd', marginTop:5, height:'20', borderRadius:10, elevation:4}}>
           <DataTable>
               <DataTable.Header>
                   <DataTable.Title >▲Exercises</DataTable.Title>
               </DataTable.Header>


               {filteredData.slice(from, to).map((exercise, index) => (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>
                        <ModalComponent name={exercise.name} text={exercise.instructions} />
                      </DataTable.Cell>
                      <DataTable.Cell style={{ justifyContent: 'flex-end' }}>☆</DataTable.Cell>
                    </DataTable.Row>
                  ))}

                 <DataTable.Pagination
                       page={page}
                       numberOfPages={Math.ceil(filteredData.length / itemsPerPage)}
                       onPageChange={(page) => setPage(page)}
                       label={`${from + 1}-${to} of ${filteredData.length}`}
                       numberOfItemsPerPageList={numberOfItemsPerPageList}
                       numberOfItemsPerPage={itemsPerPage}
                       onItemsPerPageChange={onItemsPerPageChange}
                       showFastPaginationControls
                       selectPageDropdownLabel={'Rows per page'}
                     />
           </DataTable>
           </View>
    )
}

export default DataTableComponent;
