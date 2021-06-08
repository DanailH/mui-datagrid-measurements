import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

function DataGrid10000() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10000,
    maxColumns: 20,
  });
  const pagination = {
    pagination: false,
    autoPageSize: false,
  };

  return (
    <div style={{width: '100%', height: 500}}>
      <DataGrid
        {...data}
        {...pagination}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default DataGrid10000;
