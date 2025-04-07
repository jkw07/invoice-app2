import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { Alert, Box, Button, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { filterData } from "../../../utils/filterData";
import { tableColsClients } from "./tableCols";
import { Search } from "lucide-react";
import { useUserStore } from "../../../store/currentUserStore";
import { ClientBasic } from "../../../graphql/types/client";
import { useNavigate } from "react-router-dom";
import { useClientsByCompany } from "../../../graphql/services/clientService";

export const ClientsTableGrid = () => {
  const { company } = useUserStore();
  const [clientsData, setClientsData] = useState<ClientBasic[]>([]);
  const [filteredData, setFilteredData] = useState<ClientBasic[]>([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleGoToEditClientForm = (id: string) => {
    navigate(`/clients/edit/${id}`);
  };

  const handleDeleteClient = (id: string) => {
    console.log("Delete client with ID:", id);
  };

  const handleGoToClientInfo = (id: string) => {
    navigate(`/clients/info/${id}`);
  };

  //TODO wyszukiwanie po adresie np ul....

  const columns = tableColsClients({
    handleDeleteClient,
    handleGoToEditClientForm,
    handleGoToClientInfo,
  });
  const {
    data: clientsList,
    loading,
    error,
    refetch,
  } = useClientsByCompany(company?.id);

  useEffect(() => {
    if (clientsList?.getClientsByCompany) {
      setClientsData(clientsList.getClientsByCompany);
      setFilteredData(clientsList.getClientsByCompany);
    }
  }, [clientsList]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredData(clientsData);
    } else {
      const filtered = filterData(clientsData, searchText);
      setFilteredData(filtered);
    }
  }, [searchText, clientsData]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <>
      {error && !loading && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              disabled={loading}
              onClick={() => refetch()}
            >
              Spróbuj ponownie
            </Button>
          }
          sx={{ mb: 2 }}
        >
          Wystąpił błąd: {error.message}
        </Alert>
      )}
      <TextField
        label="Szukaj"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearchChange}
        sx={{
          marginBottom: 2,
          width: "100%",
          background: "white",
          marginTop: 2,
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          },
        }}
      />
      <Box sx={{ width: "100%", background: "white" }}>
        <DataGrid
          rows={filteredData}
          loading={loading}
          slotProps={{
            loadingOverlay: loading
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
