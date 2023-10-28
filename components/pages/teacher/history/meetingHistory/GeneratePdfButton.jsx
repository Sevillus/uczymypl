"use client"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import useGeneratePdf from "../../../../../hooks/useGeneratePdf";

const GeneratePdfButton = ({ meetingHistory }) => {
    const { loading, handleGeneratePdf } = useGeneratePdf();

    const handleGeneratePdfClick = () => {
        handleGeneratePdf(meetingHistory).then();
    };

    return (
        <button
            className={"border-2 rounded-lg p-1 px-2 flex gap-4 bg-white"}
            onClick={handleGeneratePdfClick}
            disabled={loading}
        >
            <DownloadOutlinedIcon />
            Generuj PDF
        </button>
    );
};

export default GeneratePdfButton;
