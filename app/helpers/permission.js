import * as Permissions from 'expo-permissions';

export const getPermissionStatus = async (permission) => {
    const { status } = await Permissions.getAsync(permission);
    const isGranted = status === 'granted';

    if (!isGranted) {
        const { granted } = await Permissions.askAsync(permission);
        return granted;
    }

    return true;
}