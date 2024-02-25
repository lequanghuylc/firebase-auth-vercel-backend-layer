import { allowCORS } from '@/@common-utils/allowCORS';
export default async function hello(req, res) {
    await allowCORS(req, res);
    res.json({
        success: true,
        message: 'API path will follow file structure.',
    });
}