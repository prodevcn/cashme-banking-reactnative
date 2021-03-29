import Permissions, { PermissionType, getAsync } from "expo-permissions";

export const getPermissionStatus = async (
  permission: PermissionType,
): Promise<boolean> => {
  const { status }: { status: string } = await getAsync(permission);
  const isGranted: boolean = status === "granted";

  if (!isGranted) {
    const { granted }: { granted: boolean } = await Permissions.askAsync(
      permission,
    );
    return granted;
  }

  return true;
};
