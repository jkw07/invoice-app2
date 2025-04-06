import {
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useUserStore } from "../store/currentUserStore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../hooks/useNavigation";
import {
  useDefaultCompany,
  useCompaniesByUser,
} from "../graphql/services/companyService";
import { Building2 } from "lucide-react";
import { AddNewCompany } from "./AddNewCompany";

export const Topbar = () => {
  const { company, setCompany, replaceCompany, user } = useUserStore();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { goToInvoicesModule } = useNavigation();
  const [addNewCompanyOpen, setAddNewCompanyOpen] = useState(false);

  const {
    data: defaultCompanyData,
    loading,
    error,
  } = useDefaultCompany(company !== null);

  const { data: companiesData } = useCompaniesByUser();

  useEffect(() => {
    if (defaultCompanyData?.getDefaultCompanyByUser && !company) {
      const defaultCompany = defaultCompanyData.getDefaultCompanyByUser;
      setCompany(defaultCompany);
    }
  }, [defaultCompanyData, company, setCompany]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleCloseAddNewCompanyDialog = () => {
    setAddNewCompanyOpen(false);
  };

  const handleOpenAddNewCompanyDialog = () => {
    setAddNewCompanyOpen(true);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleCompanySelect = (company: { id: number; fullName: string }) => {
    replaceCompany(company);
    setOpen(false);
    goToInvoicesModule();
  };

  return (
    <Paper elevation={1} className="topbar">
      <div className="topbar-nav">
        <span>{user?.email}</span>
      </div>
      <Divider orientation="vertical" flexItem />
      {error && (
        <div className="topbar-nav">
          <span>{error.message}</span>
        </div>
      )}
      <div className="topbar-nav">
        <Button
          ref={anchorRef}
          id="composition-button"
          variant="contained"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          startIcon={<FormatListBulletedIcon />}
        >
          {" "}
          {loading ? "Ładowanie..." : ""}
          {company ? `Firma: ${company.fullName}` : "Brak firmy"}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {companiesData?.getCompaniesByUser.map((comp) => (
                      <MenuItem
                        key={comp.id}
                        onClick={() => handleCompanySelect(comp)}
                      >
                        {comp.fullName}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="topbar-nav">
        <Button
          variant="contained"
          startIcon={<Building2 />}
          onClick={handleOpenAddNewCompanyDialog}
        >
          Dodaj nową firmę
        </Button>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="topbar-nav"></div>
      <AddNewCompany
        open={addNewCompanyOpen}
        handleClose={handleCloseAddNewCompanyDialog}
      />
    </Paper>
  );
};
