import { Button } from "@material-tailwind/react";
import { Share2 } from "lucide-react";

export default function ShareButton({ itemId }) {
  const shareUrl = window.location.href + `/${itemId}`;

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          url: shareUrl,
        });
        console.log("URL shared successfully");
      } catch (error) {
        console.error("Error sharing URL:", error);
      }
    } else {
      // Fallback to copying the URL to the clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("URL copied to clipboard");
      } catch (error) {
        console.error("Failed to copy URL:", error);
      }
    }
  };
  return (
    <Button
      size="sm"
      onClick={handleShareClick}
      className=" flex items-center gap-2"
    >
      <Share2 color="white" size={14} />
      Share
    </Button>
  );
}
