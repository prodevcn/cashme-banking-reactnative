import RNOtpVerify from "react-native-otp-verify";

export const getHash = () => RNOtpVerify.getHash();

export const listenForSms = async (callback: Function) => {
  try {
    const otp = await RNOtpVerify.getOtp();

    if (otp) {
      RNOtpVerify.addListener(message => otpHandler(message, callback));
    }
  } catch {
    // TODO
  }
};

const otpHandler = (message: string, callback: Function) => {
  const otp = /(\d{4})/g.exec(message) || [];
  callback(otp[0]);
  RNOtpVerify.removeListener();
};
