import * as Permissions from 'expo-permissions';

export const getPermissionStatus = async (permission) => {
    const { status } = await Permissions.getAsync(permission);
    let granted = status === 'granted';

    if (status !== 'granted') {
        const response = await Permissions.askAsync(permission);
        granted = response.granted;
    }

    return granted;
}