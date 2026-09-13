// التبديل بين التبويبات (تسجيل الدخول / إنشاء حساب)
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTabBtn = document.getElementById('loginTabBtn');
    const signupTabBtn = document.getElementById('signupTabBtn');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginTabBtn.classList.add('active');
        signupTabBtn.classList.remove('active');
    } else {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
    }
}

// منع إدخال أي شيء سوى الأرقام في خانة الهاتف
document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// التحقق من صحة بيانات إنشاء الحساب عند الإرسال
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupPassword').value;

    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');

    // 1. التحقق من رقم الهاتف (10 أرقام بالضبط)
    if (phone.length !== 10) {
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // 2. التحقق من امتداد Gmail
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // 3. التحقق من كلمة السر (حروف كابيتال + حروف سمول + أرقام + طول لا يقل عن 8)
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!hasUpper || !hasLower || !hasNumber || password.length < 8) {
        passError.style.display = 'block';
        isValid = false;
    } else {
        passError.style.display = 'none';
    }

    if (isValid) {
        alert('تم إنشاء الحساب بنجاح! 🚀');
        // هنا يمكنك توجيه المستخدم أو حفظ البيانات
    }
});