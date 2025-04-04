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
import {
  GET_COMPANIES_BY_USER,
  GET_DEFAULT_COMPANY,
} from "../graphql/company-queries";
import { useQuery } from "@apollo/client";

type Company = {
  id: number;
  fullName: string;
};

//TODO nie wyswietla name

export const Topbar = () => {
  const { company, setCompany, replaceCompany, user } = useUserStore();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const {
    data: defaultCompanyData,
    loading,
    error,
  } = useQuery(GET_DEFAULT_COMPANY, {
    skip: company !== null,
    fetchPolicy: "no-cache",
  });

  const { data: companiesData } = useQuery(GET_COMPANIES_BY_USER, {
    fetchPolicy: "no-cache",
  });

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
                    {companiesData?.getCompaniesByUser.map((comp: Company) => (
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
    </Paper>
  );
};
