import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/shotwot-logo.png.asset.json";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logoAsset.url}
        alt="ShotWot"
        className="h-9 w-9 rounded-lg shadow-sm"
      />
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        ShotWot<span className="text-saffron">.</span>Studio
      </span>
    </Link>
  );
}
