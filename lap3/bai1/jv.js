function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "") {
        alert("Yêu cầu nhập họ tên");
        return;
    }

    if (email === "") {
        alert("Yêu cầu nhập địa chỉ email");
        return;
    }

    if (!validateEmail(email)) {
        alert("Yêu cầu nhập đúng định dạng địa chỉ email");
        return;
    }

    if (message === "") {
        alert("Yêu cầu nhập nội dung");
        return;
    }

    alert("Cám ơn bạn đã đăng ký!");
}

function resetForm() {
    if (confirm("Có chắc là bạn muốn xoá toàn bộ thông tin và nhập lại không?")) {
        document.getElementById('registrationForm').reset();
    }
}
