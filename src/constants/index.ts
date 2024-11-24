// dev
export const DEV_MODE = true;

// path
export const FONT_PATH = "./fonts/Standard.flf";
export const DATABASE_PATH = DEV_MODE ? "drizzle/lucy.db" : "dist/lucy.db";
export const INPUT_FILES_PATH = DEV_MODE ? "./tests/pdf/" : "./";

// mimetype
export const PDF_MIMETYPE = "application/pdf";

// test
export const TEST_PDF_FILES = [
  "bankole.ronel-cv.pdf",
  "ben.smida.cv.qa.pdf",
  "c.v_martial_samou.pdf",
  "cv_alexandreagostini_2024_v2.pdf",
];
