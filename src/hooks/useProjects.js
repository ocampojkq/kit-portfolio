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
        const rows = csv.trim().split("\n").slice(1);
        const parsed = rows.map((row) => {
          const cols = row.match(/(".*?"|[^,]+)(?=,|$)/g) || [];
          const clean = cols.map((c) => c.replace(/^"|"$/g, "").trim());
          return {
            title: clean[0] || "",
            description: clean[1] || "",
            tech: clean[2] || "",
            liveUrl: clean[3] || "",
            githubUrl: clean[4] || "",
            category: clean[5] || "",
            featured: clean[6] === "true",
            date: clean[7] || "",
          };
        });
        setProjects(parsed);
      });
  }, []);

  return projects;
}
