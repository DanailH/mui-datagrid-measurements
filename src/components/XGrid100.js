import { XGrid, GridToolbar } from '@material-ui/x-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

function XGrid100() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 20,
  });
  const pagination = {
    pagination: false,
    autoPageSize: false,
    pageSize: 20,
  };

  return (
    <div style={{width: '100%', height: 500}}>
      <XGrid
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

export default XGrid100;
