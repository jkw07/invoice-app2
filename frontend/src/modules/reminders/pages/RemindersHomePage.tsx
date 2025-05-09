import { Alert } from "@mui/material";
import { useUserStore } from "../../../store/currentUserStore";
import { RemindersDateCalendar } from "../components/DateCalendar";
import { NewReminder } from "../components/NewReminder";
import "../styles/remindersStyles.scss";

export const RemindersHomePage = () => {
  const { company } = useUserStore();
  if (!company?.id) {
    return (
      <>
        <h1>Powiadomienia</h1>
        <div className="actions-container">
          <Alert severity="error">
            Brak firmy. Proszę dodać firmę, aby móc skorzystać z
            funkcjonalności.
          </Alert>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>Powiadomienia</h1>
      <div className="reminders-content">
        <div className="calendar">
          <RemindersDateCalendar />
        </div>
        <div className="set-reminder">
          <h3>Ustaw powiadomienie:</h3>
          <NewReminder />
        </div>
      </div>
    </>
  );
};
