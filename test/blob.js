function bgChanger (color) {
    try {
        $('body').css('background-color', color);
        return 'we changed your background successfully';
    } catch (err) {
        if (err) return err;
    }
}
