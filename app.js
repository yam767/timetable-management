// Simulated User Data (for login)
const users = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    teacher: { username: "teacher", password: "teacher123", role: "teacher" },
    student: { username: "student", password: "student123", role: "student" },
};

// Login function based on the selected role
function loginUser(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Check if the user exists and the password is correct
    if (users[username] && users[username].password === password && users[username].role === role) {
        // Redirect based on the role
        if (role === 'admin') {
            window.location.href = 'admin_dashboard.htm';  // Redirect to admin dashboard
        } else if (role === 'student') {
            window.location.href = 'student_timetable.html';  // Redirect to student timetable
        } else if (role === 'teacher') {
            window.location.href = 'teacher_timetable.html';  // Redirect to teacher timetable
        }
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}
