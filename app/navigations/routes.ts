import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentType } from "react";
import i18n from "../i18n";
import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  HELP_SCREEN,
  NO_CONNECTION,
  FORGOT_PASSWORD,
  RESET_PIN,
  SECURITY_SETTINGS,
  PASSWORD_RECOVER_CODE,
  FINANCE,
  PROFILE_SCREEN,
  SECURITY_QUESTION,
  RESET_PASSWORD,
  SIGN_UP,
  PHONE_VERIFICATION,
  PHONE_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION,
  EMAIL_VERIFICATION_SUCCESS,
  PASSWORD_SETUP,
  FACE_VERIFICATION_SETUP,
  PROFILE_CREATE_SUCCESS,
  CASH_ME,
  SECURITY_QUESTION_SETUP,
  GET_LOAN,
  LOAN_TYPES,
  PERSONAL_INFO,
  SMS_SIGNATURE,
  PDF_VIEWER,
} from "../constants";
import Help from "../screens/Help";
import Categories from "../screens/Categories";
import Home from "../screens/Home";
import NoConnection from "../screens/NoConnection";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPin from "../screens/ResetPin";
import SecuritySettings from "../screens/SecuritySettings";
import PasswordRecoverCode from "../screens/PasswordRecoverCode";
import Finance from "../screens/Products/Finance";
import Profile from "../screens/Profile";
import SecurityQuestion from "../screens/SecurityQuestion";
import ResetPassword from "../screens/ResetPassword";
import SignUp from "../screens/SignUp";
import PhoneVerificationSuccess from "../screens/PhoneVerificationSuccess";
import PhoneVerification from "../screens/PhoneVerification";
import EmailVerification from "../screens/EmailVerification";
import EmailVerificationSuccess from "../screens/EmailVerificationSuccess";
import PasswordSetup from "../screens/PasswordSetup";
import CashMe from "../screens/Products/CashMe";
import SecurityQuestionSetup from "../screens/SecurityQuestionSetup";
import FaceVerificationSetup from "../screens/FaceVerificationSetup";
import ProfileCreateSuccess from "../screens/ProfileCreateSuccess";
import GetLoan from "../screens/GetLoan";
import Proposals from "../screens/Proposals";
import PersonalInfo from "../screens/PersonalInfo";
import SmsSignature from "../screens/SmsSignature";
import PdfViewer from "../screens/PdfViewer";

interface Route {
  name: string;
  component: ComponentType;
  options?: StackNavigationOptions;
}

export const nonAuthBottomTabScreens: Array<Route> = [
  {
    name: HOME_SCREEN,
    component: Home,
    options: { title: "Home" },
  },
  {
    name: CATEGORIES_SCREEN,
    component: Categories,
    options: { title: i18n.t("categories") },
  },
  {
    name: HELP_SCREEN,
    component: Help,
    options: { title: "Help" },
  },
];

export const authBottomTabScreens: Array<Route> = [
  {
    name: HOME_SCREEN,
    component: Home,
    options: { title: "Home" },
  },
  {
    name: CATEGORIES_SCREEN,
    component: Categories,
    options: { title: i18n.t("categories") },
  },
  {
    name: PROFILE_SCREEN,
    component: Profile,
    options: { title: i18n.t("profile") },
  },
];

export const authScreens: Array<Route> = [
  {
    name: FORGOT_PASSWORD,
    component: ForgotPassword,
    options: { headerShown: false },
  },
  {
    name: PASSWORD_RECOVER_CODE,
    component: PasswordRecoverCode,
    options: { headerShown: false },
  },
  {
    name: SECURITY_QUESTION,
    component: SecurityQuestion,
    options: { headerShown: false },
  },
  {
    name: RESET_PASSWORD,
    component: ResetPassword,
    options: { headerShown: false },
  },
  {
    name: SIGN_UP,
    component: SignUp,
    options: { headerShown: false },
  },
  {
    name: PHONE_VERIFICATION,
    component: PhoneVerification,
    options: { headerShown: false },
  },
  {
    name: PHONE_VERIFICATION_SUCCESS,
    component: PhoneVerificationSuccess,
    options: { headerShown: false },
  },
  {
    name: EMAIL_VERIFICATION,
    component: EmailVerification,
    options: { headerShown: false },
  },
  {
    name: EMAIL_VERIFICATION_SUCCESS,
    component: EmailVerificationSuccess,
    options: { headerShown: false },
  },
  {
    name: PASSWORD_SETUP,
    component: PasswordSetup,
    options: { headerShown: false },
  },
  {
    name: FACE_VERIFICATION_SETUP,
    component: FaceVerificationSetup,
    options: { headerShown: false },
  },
  {
    name: SECURITY_QUESTION_SETUP,
    component: SecurityQuestionSetup,
    options: { headerShown: false },
  },
  {
    name: PROFILE_CREATE_SUCCESS,
    component: ProfileCreateSuccess,
    options: { headerShown: false },
  },
];

export const getLoan: Route = {
  name: GET_LOAN,
  component: GetLoan,
  options: { headerShown: false },
};

export const proposals: Route = {
  name: LOAN_TYPES,
  component: Proposals,
  options: { headerShown: false },
};

export const noConnectionScreen: Route = {
  name: NO_CONNECTION,
  component: NoConnection,
  options: { headerShown: false },
};

export const resetPinScreen: Route = {
  name: RESET_PIN,
  component: ResetPin,
  options: { headerShown: false },
};

export const securitySettingsScreen: Route = {
  name: SECURITY_SETTINGS,
  component: SecuritySettings,
  options: { headerShown: false },
};

export const productScreens: Array<Route> = [
  {
    name: FINANCE,
    component: Finance,
    options: { title: "Finance", headerShown: false },
  },
  {
    name: CASH_ME,
    component: CashMe,
    options: { title: "CashMe", headerShown: false },
  },
];

export const personalInfoScreen: Route = {
  name: PERSONAL_INFO,
  component: PersonalInfo,
  options: { headerShown: false },
};

export const smsSignatureScreen: Route = {
  name: SMS_SIGNATURE,
  component: SmsSignature,
  options: { headerShown: false },
};

export const pdfViewerScreen: Route = {
  name: PDF_VIEWER,
  component: PdfViewer,
  options: { headerShown: false },
};
