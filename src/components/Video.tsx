import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black-900 flex justify-center p-7">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player autoplay>
            <Youtube videoId={"BXpWOd-d-gI"} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    </div>
  );
}
