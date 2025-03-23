import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { filterData } from "../../../utils/filterData";
import { useClientsStore } from "../store/clientsStore";
import { useClientsActions } from "../hooks/useClientsActions";
import { tableColsClients } from "./tableCols";

export const ClientsTableGrid = () => {
  const { handleDeleteClient, handleGoToEditClientForm } = useClientsActions();
  const columns = tableColsClients({
    handleDeleteClient,
    handleGoToEditClientForm,
  });
  const {
    clientsData,
    filteredData,
    searchText,
    setFilteredData,
    setClientsData,
  } = useClientsStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      console.error("Error fetching clients:");
      setIsLoading(false);
    };
    fetchClients();
  }, [setClientsData]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredData(clientsData);
    } else {
      const filtered = filterData(clientsData, searchText);
      setFilteredData(filtered);
    }
  }, [searchText, clientsData, setFilteredData]);

  return (
    <>
      <Box sx={{ width: "100%", background: "white" }}>
        <DataGrid
          rows={filteredData}
          loading={isLoading}
          slotProps={{
            loadingOverlay: isLoading
              ? {
                  variant: "linear-progress",
                  noRowsVariant: "linear-progress",
                }
              : undefined,
          }}
          columns={columns}
          columnHeaderHeight={56}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 30, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};
