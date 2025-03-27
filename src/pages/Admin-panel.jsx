import { useState, useEffect } from "react";
import styles from "./AdminPanel.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Регистрация компонентов Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminPanel() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [settings, setSettings] = useState({
    neonBrightness: 70, // Яркость неона (0-100)
    animationSpeed: 50, // Скорость анимаций (0-100)
    notifications: true,
  });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => {
          setError("Failed to fetch products. SYSTEM ERROR 0xFF.");
          console.error("Fetch error:", err);
        });

      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          console.log("Users loaded:", data);
        })
        .catch((err) => {
          setError("Failed to fetch users. SYSTEM ERROR 0xFE.");
          console.error("Fetch error:", err);
        });

      // Генерация фейковых логов
      const logMessages = [
        "SYSTEM: Zafar logged in [2025-03-20 14:32:01]",
        "SYSTEM: Product #15 viewed [2025-03-20 14:32:02]",
        "SYSTEM: Server load increased to 68% [2025-03-20 14:32:03]",
        "SYSTEM: User #17 purchased item #8 [2025-03-20 14:32:04]",
        "SYSTEM: Security scan completed [2025-03-20 14:32:05]",
      ];
      let logIndex = 0;
      const logInterval = setInterval(() => {
        if (logIndex < logMessages.length) {
          setLogs((prevLogs) => [...prevLogs, logMessages[logIndex]].slice(-5)); // Показываем последние 5 логов
          logIndex++;
        } else {
          logIndex = 0;
        }
      }, 3000); // Новый лог каждые 3 секунды

      return () => clearInterval(logInterval);
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    const credentials = { username, password };
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.token) {
        setMessage("ACCESS GRANTED! WELCOME TO HACKER ADMIN [0x00].");
        setError(null);
        setIsLoggedIn(true);
        setTimeout(() => setMessage(null), 5000);
      } else {
        setError("ACCESS DENIED! INVALID CREDENTIALS [0xFF].");
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      setError("CONNECTION ERROR! CHECK NETWORK [0xFE].");
      setTimeout(() => setError(null), 5000);
      console.error("Login error:", err);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("DELETE PRODUCT? [Y/N]")) {
      setProducts(products.filter((product) => product.id !== id));
      setMessage("PRODUCT DELETED [SIMULATED - 0x01].");
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? editingProduct : product
        )
      );
      setEditingProduct(null);
      setMessage("PRODUCT UPDATED [SIMULATED - 0x02].");
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNeonBrightnessChange = (e) => {
    setSettings({ ...settings, neonBrightness: parseInt(e.target.value) });
  };

  const handleAnimationSpeedChange = (e) => {
    setSettings({ ...settings, animationSpeed: parseInt(e.target.value) });
  };

  const handleNotificationsChange = (e) => {
    setSettings({ ...settings, notifications: e.target.checked });
    setMessage(`NOTIFICATIONS [${e.target.checked ? "ENABLED" : "DISABLED"}]`);
    setTimeout(() => setMessage(null), 5000);
  };

  // Динамический цвет неона на основе яркости
  const neonColor = `rgb(0, ${settings.neonBrightness * 2.55}, 0)`; // Яркость от 0 до 100 -> 0 до 255

  // Данные для графиков
  const usersOnlineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "USERS ONLINE",
        data: [30, 45, 60, 50, 70, 40, 42],
        borderColor: neonColor,
        backgroundColor: `rgba(0, ${settings.neonBrightness * 2.55}, 0, 0.2)`,
        borderWidth: 2,
        pointBackgroundColor: neonColor,
        pointBorderColor: "#000000",
        pointRadius: 4,
        tension: 0.3,
      },
    ],
  };

  const serverLoadData = {
    labels: ["CPU", "Memory", "Disk"],
    datasets: [
      {
        label: "SERVER LOAD",
        data: [67, 45, 30],
        backgroundColor: [
          neonColor,
          `rgba(0, ${settings.neonBrightness * 1.5}, 0)`,
          `rgba(0, ${settings.neonBrightness * 0.75}, 0)`,
        ],
        borderColor: "#000000",
        borderWidth: 1,
      },
    ],
  };

  const userActivityData = {
    labels: ["Registrations", "Purchases", "Views"],
    datasets: [
      {
        label: "USER ACTIVITY",
        data: [15, 25, 50],
        backgroundColor: `rgba(0, ${settings.neonBrightness * 2.55}, 0, 0.5)`,
        borderColor: neonColor,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: neonColor,
          font: {
            family: "'OCR-A', 'Courier New', monospace",
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: "#000000",
        titleColor: neonColor,
        bodyColor: neonColor,
        borderColor: neonColor,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: neonColor,
          font: {
            family: "'OCR-A', 'Courier New', monospace",
          },
        },
        grid: {
          color: `rgba(0, ${settings.neonBrightness * 2.55}, 0, 0.1)`,
        },
      },
      y: {
        ticks: {
          color: neonColor,
          font: {
            family: "'OCR-A', 'Courier New', monospace",
          },
        },
        grid: {
          color: `rgba(0, ${settings.neonBrightness * 2.55}, 0, 0.1)`,
        },
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 1000 + (settings.animationSpeed * 20), // Скорость анимации
      easing: "easeInOutQuad",
    },
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.loginContainer}>
        <style>{`body { background: #000000 !important; }`}</style>
        {message && <div className={styles.messageBox}>{message}</div>}
        {error && <div className={styles.errorBox}>{error}</div>}
        <h1 className={styles.title}>[ ADMIN LOGIN TERMINAL ]</h1>
        <div className={styles.loginBox}>
          <label className={styles.label}>USERNAME:</label>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={styles.label}>PASSWORD:</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <style>{`body { background: #000000 !important; }`}</style>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>[ADMIN]    [CONSOLE]</h2>
        <ul className={styles.sidebarMenu}>
          <li
            className={`${styles.sidebarItem} ${activeSection === "Dashboard" ? styles.active : ""}`}
            onClick={() => setActiveSection("Dashboard")}
          >
            [DASHBOARD]
          </li>
          <li
            className={`${styles.sidebarItem} ${activeSection === "Products" ? styles.active : ""}`}
            onClick={() => setActiveSection("Products")}
          >
            [PRODUCTS]
          </li>
          <li
            className={`${styles.sidebarItem} ${activeSection === "Users" ? styles.active : ""}`}
            onClick={() => setActiveSection("Users")}
          >
            [USERS]
          </li>
          <li
            className={`${styles.sidebarItem} ${activeSection === "Settings" ? styles.active : ""}`}
            onClick={() => setActiveSection("Settings")}
          >
            [SETTINGS]
          </li>
          <li className={styles.sidebarItem} onClick={() => setIsLoggedIn(false)}>
            [LOGOUT - 0x00]
          </li>
        </ul>
        <div className={styles.sidebarStatus}>STATUS: ACTIVE [0x01]</div>
      </div>
      <div className={styles.mainContent}>
        {message && <div className={styles.messageBox}>{message}</div>}
        {error && <div className={styles.errorBox}>{error}</div>}

        {/* Dashboard */}
        {activeSection === "Dashboard" && (
          <>
            <h1 className={styles.adminTitle}>[ SYSTEM DASHBOARD ]</h1>
            <div className={styles.dashboard}>
              <div className={styles.statBox}>
                <h3>USERS ONLINE:</h3>
                <p>[ 42 / 100 ]</p>
              </div>
              <div className={styles.statBox}>
                <h3>SERVER LOAD:</h3>
                <p>[ 67% ]</p>
              </div>
              <div className={styles.statBox}>
                <h3>TOTAL PRODUCTS:</h3>
                <p>[ {products.length} ]</p>
              </div>
              <div className={styles.statBox}>
                <h3>REGISTERED USERS:</h3>
                <p>[ {users.length} ]</p>
              </div>
              <div className={styles.statBox}>
                <h3>UPTIME:</h3>
                <p>[ 99.9% ]</p>
              </div>
              <div className={styles.statBox}>
                <h3>LAST UPDATE:</h3>
                <p>[ 2025-03-20 14:32:01 ]</p>
              </div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chartBox}>
                <h3>[ USERS ONLINE - LAST 7 DAYS ]</h3>
                <div className={styles.chartWrapper}>
                  <Line data={usersOnlineData} options={chartOptions} />
                  <div className={styles.scanLine}></div>
                </div>
              </div>
              <div className={styles.chartBox}>
                <h3>[ SERVER LOAD DISTRIBUTION ]</h3>
                <div className={styles.chartWrapper}>
                  <Pie data={serverLoadData} options={chartOptions} />
                </div>
              </div>
              <div className={styles.chartBox}>
                <h3>[ USER ACTIVITY ]</h3>
                <div className={styles.chartWrapper}>
                  <Bar data={userActivityData} options={chartOptions} />
                  <div className={styles.scanLine}></div>
                </div>
              </div>
            </div>
            <div className={styles.logTerminal}>
              <h3>[ SYSTEM LOGS ]</h3>
              <div className={styles.logWindow}>
                {logs.map((log, index) => (
                  <p key={index} className={styles.logEntry}>
                    {log}
                  </p>
                ))}
                <div className={styles.logScanLine}></div>
              </div>
            </div>
          </>
        )}

        {/* Products */}
        {activeSection === "Products" && (
          <>
            <h1 className={styles.adminTitle}>[ PRODUCT MANAGEMENT TERMINAL ]</h1>
            {editingProduct ? (
              <div className={styles.editForm}>
                <h3 className={styles.editTitle}>[ EDIT PRODUCT - ID: {editingProduct.id} ]</h3>
                <input
                  className={styles.input}
                  value={editingProduct.title}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, title: e.target.value })
                  }
                  placeholder="TITLE"
                />
                <input
                  className={styles.input}
                  value={editingProduct.price}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: parseFloat(e.target.value) || 0,
                    })
                  }
                  placeholder="PRICE"
                  type="number"
                />
                <input
                  className={styles.input}
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, description: e.target.value })
                  }
                  placeholder="DESCRIPTION"
                />
                <button className={styles.button} onClick={handleSaveEdit}>
                  [SAVE CHANGES]
                </button>
                <button
                  className={styles.button}
                  onClick={() => setEditingProduct(null)}
                >
                  [CANCEL - 0x00]
                </button>
              </div>
            ) : (
              <>
                <table className={styles.productTable}>
                  <thead>
                    <tr>
                      <th>[ID]</th>
                      <th>[IMAGE]</th>
                      <th>[TITLE]</th>
                      <th>[PRICE]</th>
                      <th>[DESCRIPTION]</th>
                      <th>[ACTIONS]</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentProducts.length > 0 ? (
                      currentProducts.map((product) => (
                        <tr key={product.id}>
                          <td>[{product.id}]</td>
                          <td>
                            <img
                              src={product.image}
                              alt={product.title}
                              className={styles.productImage}
                            />
                          </td>
                          <td>{product.title}</td>
                          <td>${product.price}</td>
                          <td>{product.description.substring(0, 50)}...</td>
                          <td>
                            <button
                              className={styles.actionButton}
                              onClick={() => handleEdit(product)}
                            >
                              [EDIT]
                            </button>
                            <button
                              className={styles.actionButton}
                              onClick={() => handleDelete(product.id)}
                            >
                              [DELETE]
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6">[LOADING DATA...]</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className={styles.pagination}>
                  <button
                    className={styles.paginationButton}
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    [PREVIOUS]
                  </button>
                  <span className={styles.pageInfo}>
                    PAGE [ {currentPage} / {totalPages} ]
                  </span>
                  <button
                    className={styles.paginationButton}
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    [NEXT]
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* Users */}
        {activeSection === "Users" && (
          <>
            <h1 className={styles.adminTitle}>[ USER MANAGEMENT TERMINAL ]</h1>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>[ID]</th>
                  <th>[USERNAME]</th>
                  <th>[EMAIL]</th>
                  <th>[ADDRESS]</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>[{user.id}]</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        {user.address.street}, {user.address.city}, {user.address.zipcode}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">[LOADING USERS...]</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}

        {/* Settings */}
        {activeSection === "Settings" && (
          <>
            <h1 className={styles.adminTitle}>[ SYSTEM SETTINGS ]</h1>
            <div className={styles.settingsForm}>
              <div className={styles.settingItem}>
                <label className={styles.label}>NEON BRIGHTNESS: [{settings.neonBrightness}%]</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.neonBrightness}
                  onChange={handleNeonBrightnessChange}
                  className={styles.slider}
                />
              </div>
              <div className={styles.settingItem}>
                <label className={styles.label}>ANIMATION SPEED: [{settings.animationSpeed}%]</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.animationSpeed}
                  onChange={handleAnimationSpeedChange}
                  className={styles.slider}
                />
              </div>
              <div className={styles.settingItem}>
                <label className={styles.label}>NOTIFICATIONS:</label>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={handleNotificationsChange}
                  className={styles.checkbox}
                />
              </div>
              <div className={styles.settingItem}>
                <label className={styles.label}>API KEY:</label>
                <input
                  type="text"
                  className={styles.input}
                  value="FAKE-API-KEY-12345"
                  readOnly
                />
              </div>
              <button className={styles.button}>[SAVE SETTINGS]</button>
            </div>
          </>
        )}

        <div className={styles.consoleNoise}>[STATIC NOISE DETECTED - 0x03]</div>
      </div>
    </div>
  );
}