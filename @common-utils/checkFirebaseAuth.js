// need to go to Firebase console and download service account json file
// and put it in the @common-utils folder of the project
const serviceAccount = require('./firebase-service-account.json');
const admin = require('firebase-admin');
// check if firebase has already been initialized
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export async function checkFirebaseAuth(req) {
    const authorization = req.headers['authorization'];
    if (!authorization) return null;
    try {
        const decodedToken = await admin.auth().verifyIdToken(authorization);
        // { name, user_id, email, picture, uid }
        return decodedToken;
    } catch (err) {
        return null;
    }
}