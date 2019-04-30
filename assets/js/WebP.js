function check_support_webp() {
        flag = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
        console.log(flag)
    }
