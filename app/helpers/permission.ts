import Permissions, { PermissionType, getAsync } from "expo-permissions";

export const getNotificationsPermission = async () => {
  return await getPermissionStatus(Permissions.NOTIFICATIONS);
};

const getPermissionStatus = async (
  permission: PermissionType,
): Promise<boolean> => {
  const { status } = await getAsync(permission);
  const isGranted = status === "granted";

  if (!isGranted) {
    const { granted } = await Permissions.askAsync(permission);
    return granted;
  }

  return true;
};
