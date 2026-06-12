import { useState, useEffect } from "react";

const SHEET_ID = "15Sm5zLGpSDRq23Q5CsHOnnW2PGA7bNRlGfHWjMoytgY";
const TAB_NAME = "projects";

export default function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${TAB_NAME}`;
    fetch(url)
      .then((res) => res.text())
      .then((csv) => {
        console.log("RAW CSV:", csv);
        const rows = csv.trim().split("\n").slice(1);
        const parsed = rows
          .map((row) => {
            const cols = [];
            let current = "";
            let inQuotes = false;
            for (let i = 0; i < row.length; i++) {
              const char = row[i];
              if (char === '"' && row[i + 1] === '"') {
                current += '"';
                i++;
              } else if (char === '"') {
                inQuotes = !inQuotes;
              } else if (char === "," && !inQuotes) {
                cols.push(current.trim());
                current = "";
              } else {
                current += char;
              }
            }
            cols.push(current.trim());

            return {
              title: cols[0]?.replace(/^"|"$/g, "").trim() || "",
              description: cols[1]?.replace(/^"|"$/g, "").trim() || "",
              tech: cols[2]?.replace(/^"|"$/g, "").trim() || "",
              liveUrl: cols[3]?.replace(/^"|"$/g, "").trim() || "",
              githubUrl: cols[4]?.replace(/^"|"$/g, "").trim() || "",
              category: cols[5]?.replace(/^"|"$/g, "").trim() || "",
              featured: cols[6]?.replace(/^"|"$/g, "").trim() || "false",
              date: cols[7]?.replace(/^"|"$/g, "").trim() || "",
              stats: cols[8]?.replace(/^"|"$/g, "").trim() || "",
              image: cols[9]?.replace(/^"|"$/g, "").trim() || "",
              video: cols[10]?.replace(/^"|"$/g, "").trim() || "",
            };
          })
          .filter((project) => project.title !== "");

        setProjects(parsed);
      });
  }, []);

  return projects;
}
