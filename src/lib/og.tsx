import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

/** Branded Open Graph card: cream background, solid green/gold, no gradients. */
export async function renderOg(kicker: string, title: string, sub = "Websites, online stores & apps · Pune, India · Clients worldwide") {
  const logo = await readFile(join(process.cwd(), "public/logo-green.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf8f3" }}>
        <div style={{ width: 24, height: "100%", background: "#2c7469", display: "flex" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={src} width={80} height={80} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 42, fontWeight: 700, color: "#13201e" }}>Makvion</div>
              <div style={{ fontSize: 17, letterSpacing: 6, color: "#2c7469" }}>TECHNOLOGIES</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#2c7469", fontWeight: 700, textTransform: "uppercase" }}>{kicker}</div>
            <div style={{ display: "flex", marginTop: 18, fontSize: 66, fontWeight: 700, color: "#13201e", lineHeight: 1.06, maxWidth: 980 }}>{title}</div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 27, color: "#55635f" }}>{sub}</div>
          </div>
          <div style={{ display: "flex", height: 10, width: 220, background: "#deb56b", borderRadius: 10 }} />
        </div>
      </div>
    ),
    ogSize,
  );
}
