import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen ">
      <nav className="flex gap-4 justify-center items-center bg-gray-200 p-4">
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/login" style={{ margin: "0 10px" }}>
          Login
        </Link>
        <Link to="/signup" style={{ margin: "0 10px" }}>
          Signup
        </Link>
      </nav>

      {/* محتوى الصفحات الفرعية */}
      <main
        style={{ padding: "20px", minHeight: "calc(100vh - 112px)" }}
        className="flex justify-center items-center flex-1 bg-gray-100"
      >
        <Outlet /> {/* هنا بيتم عرض محتوى الروت الفرعي حسب المسار */}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200">
        &copy; 2025 - Abdallah Dragon
      </footer>
    </div>
  );
}

export default Layout;
