import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Makvion — Websites, web apps & SaaS for growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const logo = await readFile(join(process.cwd(), "public/logo-green.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#faf8f3", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={src} width={84} height={84} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: "#13201e" }}>Makvion</div>
            <div style={{ fontSize: 18, letterSpacing: 6, color: "#2c7469" }}>TECHNOLOGIES</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#13201e", lineHeight: 1.05, maxWidth: 950 }}>More customers, from a website that sells while you sleep.</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#55635f" }}>Websites from $1,500 · You approve the design before we build</div>
        </div>
        <div style={{ display: "flex", height: 10, width: 220, background: "#c69141", borderRadius: 10 }} />
      </div>
    ),
    size,
  );
}
