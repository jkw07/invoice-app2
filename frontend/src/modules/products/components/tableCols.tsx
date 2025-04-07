import { IconButton, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Edit, Trash2, Info } from "lucide-react";
import { VatRateType } from "../../../graphql/types/enums";

interface TableColsProductsProps {
  handleOpenDeleteProductDialog: (id: string) => void;
  handleGoToEditProductForm: (id: string) => void;
  handleGoToProductInfo: (id: string) => void;
}

export const tableColsProducts = ({
  handleOpenDeleteProductDialog,
  handleGoToEditProductForm,
  handleGoToProductInfo,
}: TableColsProductsProps) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Nazwa",
      width: 200,
    },
    {
      field: "description",
      headerName: "Opis",
      width: 300,
    },
    {
      field: "price",
      headerName: "Cena",
      width: 150,
    },
    {
      field: "unit",
      headerName: "Jednostka miary",
      width: 150,
    },
    {
      field: "taxDisplay",
      headerName: "Stawka VAT",
      width: 150,
      renderCell: (params) => {
        const { taxType, taxRate } = params.row;

        let value = "";
        if (taxType === VatRateType.NOT_TAXED) value = "np";
        else if (taxType === VatRateType.EXEMPT) value = "zw";
        else if (taxType === VatRateType.STANDARD)
          value = taxRate !== null ? `${taxRate}%` : "";

        return <span>{value}</span>;
      },
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
                onClick={() => handleGoToProductInfo(params.row.id)}
                aria-label="Info"
              >
                <Info className="info-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edytuj">
              <IconButton
                onClick={() => handleGoToEditProductForm(params.row.id)}
                aria-label="Edit"
              >
                <Edit className="edit-button" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Usuń">
              <IconButton
                onClick={() => handleOpenDeleteProductDialog(params.row.id)}
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
