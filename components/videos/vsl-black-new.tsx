import { useEffect } from "react";

export default function VSLBlackNew() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="69a8a54ff142385a7d857fc5"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/a4d8efe4-4229-436e-b2b7-38909d763726/players/69a8a54ff142385a7d857fc5/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="69a8a54ff142385a7d857fc5"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-69a8a54ff142385a7d857fc5" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "12px",
      }} 
    />
  );

};