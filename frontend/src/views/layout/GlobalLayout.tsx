import { Outlet } from "react-router";
import CustomerAlert from "../components/CustomAlert";
import useAlertStore from "../../store/useAlertStore";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

const GlobalLayout = () => {
  const isOpen = useAlertStore((state) => state.isOpen);
  const severity = useAlertStore((state) => state.severity);
  const message = useAlertStore((state) => state.message);
  const variant = useAlertStore((state) => state.variant);

  return (
    <>
      <Header></Header>
      {isOpen && (
        <CustomerAlert
          severity={severity}
          message={message}
          variant={variant}
        />
      )}
      <main className="flex">
        <SideBar />
        <div className="p-6 mt-20 grow">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default GlobalLayout;
