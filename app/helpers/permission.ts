import * as Permissions from "expo-permissions";

export const getNotificationsPermission = async () => {
  return await getPermissionStatus(Permissions.NOTIFICATIONS);
};

export const getCameraPermission = async () => {
  return await getPermissionStatus(Permissions.CAMERA);
};

const getPermissionStatus = async (
  permission: Permissions.PermissionType,
): Promise<boolean> => {
  const { status } = await Permissions.getAsync(permission);
  const isGranted = status === "granted";

  if (!isGranted) {
    const { granted } = await Permissions.askAsync(permission);
    return granted;
  }

  return true;
};
