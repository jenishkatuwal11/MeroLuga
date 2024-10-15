import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  return (
    <div className="felx min-h-screen w-full">
      {/* admin side bar */}
      <AdminSideBar />
      <div className="flex flex-1 flex-col">
        {/* Admin header */}
        <AdminHeader />
        <main className=" flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
