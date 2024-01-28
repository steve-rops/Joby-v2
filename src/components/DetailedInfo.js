import BackButtonIcon from "./BackButtonIcon";
import { useJobsCnxt } from "../contexts/JobsContext";
import { SelectedItemFooterBtns } from "./SelectedItemFooterBtns";
import SelectedItemDetails from "./SelectedItem_Details";

export function DetailedInfo() {
  const { data, selectedID } = useJobsCnxt();
  const [selectedItem] = data.filter((job) => Number(job.id) === selectedID);

  return (
    <div className="h-[75%] w-full px-4 py-2 overflow-y-scroll">
      <BackButtonIcon />
      <SelectedItemDetails selectedItem={selectedItem} />
      <SelectedItemFooterBtns selectedItem={selectedItem} />
    </div>
  );
}
