import { IconPlayerPlay } from "@tabler/icons-react";
import { Button } from "./button";

export default function VideoModal() {
    return (
        <>
            <Button href="#" variant="ghost" className="mb-8">
                <IconPlayerPlay className="w-4 h-4 text-white" fill="currentColor" />
                Watch Video
            </Button>
        </>
    )
}