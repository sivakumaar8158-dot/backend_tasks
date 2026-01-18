import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  const tasks = [
    { id: 1, title: 'Single Input' },
    { id: 2, title: 'Validation' },
    { id: 3, title: 'State Object' },
    { id: 4, title: 'Login Form' },
    { id: 5, title: 'Multi-Step' },
    { id: 6, title: 'LocalStorage' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-purple-700">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            React Forms - Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Master form handling & state management</p>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-100px)]">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-lg">
          <nav className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Tasks</h2>
            <ul className="space-y-2">
              {tasks.map(task => (
                <li key={task.id}>
                  <NavLink
                    to={`/dashboard/task${task.id}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <span className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white items-center justify-center text-xs font-bold mr-3 inline-flex">
                        {task.id}
                      </span>
                      {task.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
