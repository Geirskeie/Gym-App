import { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import {View, TouchableOpacity} from "react-native";
import axios from "axios";
import ModalComponent from "./ModalComponent";


const DataTableComponent = ({ muscle, searchInput, favorites, setFavorites }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setSortOrder] = useState(false);
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
                      'X-Api-Key': "RBZCrQM/BWt8oUS7joBvDg==Kqq2vbBd4Xi5yuh1"
                  }
              });

              const selectedItems = response.data.slice(0, 20);
              setData(selectedItems);
              setFilteredData(selectedItems);
          } catch (error) {
              console.error('Error fetching data:', error);
          }

      };

    /// Only fetch api data when first rendered
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setPage(0);
      }, [itemsPerPage]);

    /// Filter data every time searchInput is changed
    useEffect(() => {
        filterData()
    }, [searchInput]);

    const filterData = () => {

        const filtered = data.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          setFilteredData(filtered);

    };

    const sortData = () => {
        let sorted = [];
        if (!sortOrder) {
            sorted = filteredData.sort((a, b) => a.name.localeCompare(b.name));
            setSortOrder(true);

        }
        else {
            sorted = filteredData.sort((a, b) => b.name.localeCompare(a.name));
            setSortOrder(false);
        }
        setFilteredData(sorted);
    }

    return (
        <View style={{ backgroundColor: '#dddd', marginTop:5, height:'20', borderRadius:10, elevation:4}}>
           <DataTable>
               <DataTable.Header>
                   <TouchableOpacity onPress={sortData}>
                      <DataTable.Title>
                         {!sortOrder ? '▲' : '▼'} Exercises
                      </DataTable.Title>

                   </TouchableOpacity>
               </DataTable.Header>


               {filteredData.slice(from, to).map((exercise) => (
                    <DataTable.Row key={exercise.name}>
                      <DataTable.Cell>
                        <ModalComponent name={exercise.name} text={exercise.instructions} />
                      </DataTable.Cell>
                      <TouchableOpacity>
                        <DataTable.Cell style={{ justifyContent: 'flex-end' }}>☆</DataTable.Cell>
                      </TouchableOpacity>

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
