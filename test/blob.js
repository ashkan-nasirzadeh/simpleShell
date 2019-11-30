function bgChanger (backedArr) {
    let color = backedArr[0];
    let successMessage = backedArr[1];
    let failMessage = backedArr[2];
    try {
        document.getElementsByTagName('body')[0].style.backgroundColor = "";
        document.getElementsByTagName('body')[0].style.backgroundColor = color;
        let finalColor = document.getElementsByTagName('body')[0].style.backgroundColor;
        if (finalColor != '') {
            return successMessage;
        } else {
            return failMessage;
        }
    } catch (err) {
        if (err) return err;
    }
}
