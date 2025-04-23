import { Outlet } from "react-router";
import CustomerAlert from "../components/CustomAlert";
import useAlertStore from "../../store/useAlertStore";

const GlobalLayout = () => {
  const isOpen = useAlertStore((state) => state.isOpen);
  const severity = useAlertStore((state) => state.severity);
  const message = useAlertStore((state) => state.message);
  const variant = useAlertStore((state) => state.variant);

  return (
    <>
      <header></header>
      {isOpen && (
        <CustomerAlert
          severity={severity}
          message={message}
          variant={variant}
        />
      )}
      <main className="p-4">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default GlobalLayout;
