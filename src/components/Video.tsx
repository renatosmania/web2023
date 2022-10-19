import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center p-7">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player autoplay>
            <Youtube videoId={"wYpCWwD1oz0"} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
  );
}
