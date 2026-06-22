import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

function getUniqueIdentifier() {
  if (IS_DEV) return "io.somossa.jukto.dev";
  if (IS_PREVIEW) return "io.somossa.jukto.prev";
  return "io.somossa.jukto";
}

function getAppName() {
  if (IS_DEV) return "Jukto (Dev)";
  if (IS_PREVIEW) return "Jukto (Preview)";
  return "Jukto";
}

function getAppScheme() {
  if (IS_DEV) return "jukto-dev";
  if (IS_PREVIEW) return "jukto-preview";
  return "jukto";
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const isDevClient = process.env.EXPO_PUBLIC_DEV_CLIENT === "true";

  return {
    name: getAppName(),
    slug: "jukto",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: getAppScheme(),
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        NSCameraUsageDescription:
          "This app uses the camera to scan a QR code to securely connect the app to your development environment or codebase. You can also manually enter the code if you prefer not to use the camera.",
        NSMicrophoneUsageDescription:
          "This app uses the microphone so you can dictate commands in the terminal and speak to the AI assistant. Voice is sent to Jukto servers for transcription only — we do not store or retain audio recordings.",
        NSPhotoLibraryUsageDescription:
          "This app uses your photo library so you can attach images to AI chats.",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icon.png",
        backgroundColor: "#ffffff",
      },
      predictiveBackGestureEnabled: false,
      permissions: ["RECORD_AUDIO"],
      package: getUniqueIdentifier(),
    },
    web: {
      output: "static",
      favicon: "./assets/images/icon.png",
    },
    plugins: [
      "expo-router",
      "expo-font",
      "expo-image",
      "expo-secure-store",
      "expo-status-bar",
      "expo-web-browser",
      [
        "expo-camera",
        {
          cameraPermission:
            "This app uses the camera to scan a QR code to securely connect the app to your development environment or codebase. You can also manually enter the code if you prefer not to use the camera.",
        },
      ],
      [
        "expo-image-picker",
        {
          photosPermission:
            "This app uses your photo library so you can attach images to AI chats.",
        },
      ],
      ["react-native-libsodium", {}],
      "expo-document-picker",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      "expo-asset",
      "expo-audio",
      "expo-localization",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {
        unstable_settings: {
          initialRouteName: "index",
        },
      },
      eas: {
        projectId: "b28e1b87-fc58-4f9f-bc12-b0d4a3606303",
      },
    },
    updates: {
      url: "https://u.expo.dev/b28e1b87-fc58-4f9f-bc12-b0d4a3606303",
    },
    owner: "somossaxio-org",
    runtimeVersion: isDevClient
      ? "1.0.0"
      : {
          policy: "appVersion",
        },
  };
};
