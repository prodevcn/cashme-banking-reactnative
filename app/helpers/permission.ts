import Permissions, { PermissionType } from "expo-permissions";

export const getPermissionStatus = async (
  permission: PermissionType,
): Promise<boolean> => {
  const { status }: { status: string } = await Permissions.getAsync(permission);
  const isGranted: boolean = status === "granted";

  if (!isGranted) {
    const { granted }: { granted: boolean } = await Permissions.askAsync(
      permission,
    );
    return granted;
  }

  return true;
};
