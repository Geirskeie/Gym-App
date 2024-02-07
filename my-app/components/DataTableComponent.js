import { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import {View} from "react-native";


const DataTableComponent = ({ allExercises }) => {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
      );

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, allExercises.length);

    useEffect(() => {
        setPage(0);
      }, [itemsPerPage]);

    return (
    <View style={{ backgroundColor: '#dddd', marginTop:5, height:'20', borderRadius:10, elevation:4}}>
           <DataTable>
               <DataTable.Header>
                   <DataTable.Title >▲Exercises</DataTable.Title>
               </DataTable.Header>


               {allExercises.slice(from, to).map((exercise) => (
                    <DataTable.Row key={exercise.id}>
                      <DataTable.Cell>{exercise.title}</DataTable.Cell>
                      <DataTable.Cell style={{ justifyContent: 'flex-end' }}>☆</DataTable.Cell>
                    </DataTable.Row>
                  ))}

                 <DataTable.Pagination
                       page={page}
                       numberOfPages={Math.ceil(allExercises.length / itemsPerPage)}
                       onPageChange={(page) => setPage(page)}
                       label={`${from + 1}-${to} of ${allExercises.length}`}
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
