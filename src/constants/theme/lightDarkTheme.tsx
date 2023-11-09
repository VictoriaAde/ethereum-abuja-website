import { DarkLightProps } from "@/lib/globalTypes";

export const COLORS = {
  primary: "#FFE455",
  primaryLight: "#E8D4B092",
  primary2: "#B1BBCD",
  black: "#000000",
  dark: "#0F0F0F",
  night: "#0F0F0F",
  white: "#FFFFFF",
  white2: "#787579",
  white3: "#F0F0F0",
  white4: "#ECECEC",
  white5: "#F4F4F4",
  tabBg: "#757575",
  softWhite: "#FFFFFF1A",
  softDark: "#00000010",
  bgLinear: "linear-gradient(270deg, #B09DF2 0%, #AF97EE 11.41%, #AF96EB 26.66%, #CE9EE2 49.42%, #D599CD 59.59%, #E5A8C2 72.62%, #E0B1A9 86.99%, #ECC3A2 100%)",
  grey: "#0000004D",
  grey1: "rgba(0, 0, 0, 0.1)",
  lightWhite: "#FFFFFF80",
  lightGrey: "#F1F1F1",
  red: "#E50000",
  purple: "#AC79FF",
  orange: "#F48400",
  yellow: "#F7CE4D",
  blue: "#49ACFA",
  lightOrange: "#FFE9D0",
  green: "#08BF08CC",
  pink: "#FCCDCD",
  
  navHoverLinkColor: "linear-gradient(90deg, #4662AA 0%, rgba(154, 57, 229, 0.90) 102.94%)",

  
  joinComColorBTN: "linear-gradient(90deg, #4662AA 0%, rgba(154, 57, 229, 0.90) 102.94%)",

  eventgeneralColorBTN: "#BBB5DE",


  colorBG: "#1C1B1F",
  colorBG2: "#FFFF",
  color1: "#F4EFF4",
  color2: "#313033",
  color3: "#C9C5CA",
  color4: "#787579",
  color5: "#605D62",
  color6: "#E6E1E5",
  color7: "#484649",
  color8: "#304DFF",
  color9: "#B5BFFF",
  color10: "#AEAAAE",
  color11: "#7C3EFF",
  color12: "#EAEBFF",
  color13: "#F5EEFA",
  color14: "linear-gradient(0deg, rgba(208, 188, 255, 0.14), rgba(208, 188, 255, 0.14)), #1C1B1F",
  color15: "",


  transparentWhite: "rgba(255, 255, 255, 0.2)",
  transparentWhite2: "rgba(255, 255, 255, 0.4)",
  transparentWhite3: "rgba(255, 255, 255, 0.6)",
  transparentBlack: "rgba(0, 0, 0, 0.4)",
  transparentBlack2: "rgba(0, 0, 0, 0.3)",
  transparentBlack3: "rgba(0, 0, 0, 0.07)",
  transparentBlack4: "rgba(0, 0, 0, 0.03)",
  transparent: "transparent",
  borderColor: ""
};

export const darkTheme: DarkLightProps = {
  name: "dark",
  backgroundColor: COLORS.night,
  backgroundColorGlobal: COLORS.colorBG,
  backgroundColorReverse: COLORS.white,
  backgroundColor2: COLORS.black,
  backgroundColor3: COLORS.lightWhite,
  backgroundColor4: COLORS.lightWhite,
  backgroundColor5: COLORS.bgLinear,
  backgroundColorUnique: COLORS.color2,
  borderBottomColor: COLORS.color4,
  color: COLORS.color6,
  textColor: COLORS.white,
  textColor2: COLORS.white,
  textColor3: COLORS.white3,
  textColor4: COLORS.transparentBlack,
  textColor5: COLORS.transparentWhite,
  textColor6: COLORS.transparentWhite,
  textColor7: COLORS.transparentWhite,
  textColor8: COLORS.transparentWhite3,
  borderColor: COLORS.white2,
  borderColor2: COLORS.white2,
  tabColor: COLORS.white,
  lightBorderColor: COLORS.softDark,
  transpt: COLORS.transparent,
  swapButtonBG: COLORS.color7,
  swapTextColor: COLORS.color9,
  swapStackColor: COLORS.color2,
  balanceTextColor: COLORS.colorBG2,
  balanceUpdateTextColor: COLORS.colorBG2,
  colorText: COLORS.color2,
  switcherColorBG: COLORS.colorBG,
  connectColorBG: COLORS.color9,
  modalCloseColorBG: COLORS.color2,
  popoverColorBG: COLORS.color14,
  newColorBG: COLORS.color7,
  newColor: COLORS.black
};

export const lightTheme: DarkLightProps = {
  name: "light",
  backgroundColor: COLORS.white,
  backgroundColorGlobal: COLORS.colorBG2,
  backgroundColorReverse: COLORS.black,
  backgroundColor2: COLORS.white2,
  backgroundColor3: COLORS.white4,
  backgroundColor4: COLORS.white5,
  backgroundColor5: COLORS.bgLinear,
  backgroundColorUnique: COLORS.color1,
  borderBottomColor: COLORS.color3,
  color: COLORS.color5,
  textColor: COLORS.black,
  textColor2: COLORS.white2,
  textColor3: COLORS.grey,
  textColor4: COLORS.transparentWhite2,
  textColor5: COLORS.transparentBlack2,
  textColor6: COLORS.transparentBlack3,
  textColor7: COLORS.transparentBlack4,
  textColor8: COLORS.transparentWhite3,
  borderColor: COLORS.grey,
  borderColor2: COLORS.grey1,
  tabColor: COLORS.tabBg,
  lightBorderColor: COLORS.softWhite,
  transpt: COLORS.transparent,
  swapButtonBG: COLORS.colorBG2,
  swapTextColor: COLORS.color8,
  swapStackColor: COLORS.color6,
  balanceTextColor: COLORS.color7,
  balanceUpdateTextColor: COLORS.color10,
  colorText: COLORS.color2,
  switcherColorBG: COLORS.colorBG2,
  connectColorBG: COLORS.color11,
  modalCloseColorBG: COLORS.color12,
  popoverColorBG: COLORS.color13,
  newColorBG: COLORS.color1,
  newColor: COLORS.colorBG
};
