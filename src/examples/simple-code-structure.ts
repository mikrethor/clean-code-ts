
// Mauvais exemple
if (user !== null) ‹
if (user.isActive) {
if (user.hasPermission ()) {
accessGranted () ;|
}
}
}
// Bon exemple
if (user || !user.isActive || !user.hasPermission()) return;
accessGranted ();