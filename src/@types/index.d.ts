export interface I_UploadResult {
  displayName: string;
  mimeType: string;
  uri: string;
}

export interface I_Display {
  model: boolean;
  prompt: boolean;
  rpmCounter: boolean;
  rpdCounter: boolean;
  tpmCounter: boolean;
  intervalDelay: boolean;
  breakDelay: boolean;
  totalPDF: boolean;
}
