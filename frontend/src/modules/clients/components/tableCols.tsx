import { IconButton, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Edit, Trash2, Info } from "lucide-react";

interface TableColsClientsProps {
  handleOpenDeleteClientDialog: (id: string) => void;
  handleGoToEditClientForm: (id: string) => void;
  handleGoToClientInfo: (id: string) => void;
}

export const tableColsClients = ({
  handleOpenDeleteClientDialog,
  handleGoToEditClientForm,
  handleGoToClientInfo,
}: TableColsClientsProps) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Nazwa",
      width: 200,
    },
    {
      field: "taxId",
      headerName: "NIP",
      width: 200,
    },
    {
      field: "addressDisplay",
      headerName: "Adres",
      width: 350,
      renderCell: (params) => {
        const { street, buildingNo, apartmentNo, zipCode, city } = params.row;

        const parts = [];

        if (street) parts.push(`ul. ${street}`);
        if (buildingNo) parts.push(buildingNo);
        if (apartmentNo) parts.push(`/${apartmentNo}`);
        if (zipCode) parts.push(zipCode);
        if (city) parts.push(city);

        const value = parts.join(" ");

        return <span>{value}</span>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Telefon",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Akcje",
      width: 150,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "4px",
            }}
          >
            <Tooltip title="Szczegóły">
              <IconButton
                onClick={() => handleGoToClientInfo(params.row.id)}
                aria-label="Info"
              >
                <Info className="info-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edytuj">
              <IconButton
                onClick={() => handleGoToEditClientForm(params.row.id)}
                aria-label="Edit"
              >
                <Edit className="edit-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Usuń">
              <IconButton
                onClick={() => handleOpenDeleteClientDialog(params.row.id)}
                aria-label="Delete"
              >
                <Trash2 className="delete-button" />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  return columns;
};
