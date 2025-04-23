/* Reset & Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
}

:root {
  --bg: #ffffff;
  --text: #000000;
  --primary: #febd69;
  --secondary: #f3f3f3;
  --accent: #232f3e;
}

body.dark {
  --bg: #1a1a1a;
  --text: #ffffff;
  --secondary: #2c2c2c;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--accent);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  height: 40px;
}

.menu-icon, .cart-icon, .theme-toggle, .user-info {
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: white;
}

.user-info a {
  text-decoration: none;
  color: white;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--secondary);
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
}

.sidebar.active {
  transform: translateX(0);
}

.sidebar ul {
  list-style: none;
  padding-top: 2rem;
}

.sidebar li {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  color: var(--text);
}

/* Filters */
.filters {
  padding: 1rem;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-list button {
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border: none;
  background-color: var(--primary);
  color: black;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold;
}

.category-list button:hover {
  background-color: #f0a23c;
}

#price-display {
  font-weight: bold;
  margin-top: 0.5rem;
}

/* Products */
.products {
  padding: 2rem;
  background-color: var(--bg);
}

.products h2 {
  color: var(--text);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product {
  background-color: var(--secondary);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  text-align: center;
}

.product:hover {
  transform: scale(1.03);
}

.product img {
  max-width: 100%;
  border-radius: 10px;
}

.description {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: gray;
}

/* Footer */
footer {
  background-color: var(--accent);
  padding: 1rem;
  text-align: center;
  color: white;
  position: sticky;
  bottom: 0;
}

.footer-icons span {
  margin: 0 1rem;
  cursor: pointer;
}

.footer-icons span:hover {
  color: var(--primary);
}
