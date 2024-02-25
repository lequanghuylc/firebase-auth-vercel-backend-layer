import { allowCORS } from '@/@common-utils/allowCORS';
import { checkFirebaseAuth } from '@/@common-utils/checkFirebaseAuth';

export default async function hello(req, res) {
    await allowCORS(req, res);
    const user = await checkFirebaseAuth();
    if (user) {
        res.json({
            success: true,
            message: `Hello, ${user.name}!`,
            data: user,
        });
        return;
    }
    res.json({
        success: false,
        message: 'You need to login first.',
    });
}