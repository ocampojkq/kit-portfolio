export default function PortfolioFooter({ darkMode }) {
  return (
    <footer
      className={`border-t py-6 text-center ${darkMode ? "bg-gray-900 border-gray-700 text-gray-400" : "bg-white text-gray-500"}`}
    >
      <p>© 2026 Jesse Kit Ocampo · Built with React + n8n + Google Sheets</p>
    </footer>
  );
}
