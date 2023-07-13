import {ShareIcon} from "../icons";
import {RWebShare} from "react-web-share";

export const ShareButton = ({fullName, url}) => {
    return (
        <RWebShare
            data={{
                text: "Like humans, flamingos make friends for life",
                url: {url},
                title: {fullName},
            }}
            onClick={() => console.log("shared successfully!")}
        >
            <button className="flex items-center gap-1">
                <ShareIcon/>
                <span className="text-sm font-medium">Share</span>
            </button>
        </RWebShare>

    );
};

