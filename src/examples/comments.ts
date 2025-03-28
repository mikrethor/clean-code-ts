let user;

function grantAccess(): void {
    //
}

// Bad example

// Check if the user is an admin.
if (user.role === 'ADMIN') {
    grantAccess();
}
// Good example (explicit name)
const isAdmin = user.isAdmin();
if (isAdmin) {
    grantAccess();
}