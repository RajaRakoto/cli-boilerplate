/* api */
import { geminiModel, fileManager } from "@/api";

/* constants */
import { INPUT_FILES_PATH, PDF_MIMETYPE, TEST_PDF_FILES } from "@/constants";

/* core */
import { restartAsync } from "@/core/restart";

/* data */
// import { rGemini, rGeminiUsage } from "../../../drizzle/query";

/* utils */
import { successMessage, errorMessage } from "@/utils/extras";

// ==============================

interface I_UploadResult {
  displayName: string;
  mimeType: string;
  uri: string;
}

async function uploadPDF(files: string[]): Promise<I_UploadResult[]> {
  const uploadResultArray: I_UploadResult[] = [];

  const processFileUpload = async (file: string) => {
    try {
      const uploadResult = await fileManager.uploadFile(
        `${INPUT_FILES_PATH}${file}`,
        {
          mimeType: PDF_MIMETYPE,
          displayName: file,
        }
      );

      if (uploadResult?.file) {
        uploadResultArray.push({
          displayName: uploadResult.file.displayName || "N/A",
          mimeType: uploadResult.file.mimeType || PDF_MIMETYPE,
          uri: uploadResult.file.uri || "unknown",
        });
        successMessage(file, "white_check_mark", "uploaded");
      } else {
        throw new Error("Invalid upload result");
      }
    } catch (error) {
      errorMessage(error, "upload");
    }
  };

  await Promise.all(files.map(processFileUpload));
  return uploadResultArray;
}

export async function app(): Promise<void> {
  // const result = await geminiModel.generateContent([
  //   "Donnez-moi un resumer de ce fichier PDF.",
  //   {
  //     fileData: {
  //       fileUri: uploadResult.file.uri,
  //       mimeType: uploadResult.file.mimeType,
  //     },
  //   },
  // ]);

  // console.log(result.response.text());

  const result = await uploadPDF(TEST_PDF_FILES);
  console.log(result);

  restartAsync();
}
