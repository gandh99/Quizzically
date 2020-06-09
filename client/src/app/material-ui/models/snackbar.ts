export enum SnackBarType {
    ERROR,
    SUCCESS,
}

export const getSnackBarClass = (snackBarType: SnackBarType) => {
    let snackBarClass = new Map<SnackBarType, string>([
        [SnackBarType.SUCCESS, 'snackBar-success'],
        [SnackBarType.ERROR, 'snackBar-error'],
    ])

    return snackBarClass.get(snackBarType)
}