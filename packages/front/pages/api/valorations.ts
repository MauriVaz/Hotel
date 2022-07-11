import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { api_client } from '../../lib/fetcher';

export default withApiAuthRequired(async (req: any, res: any) => {
  const { accessToken } = await getAccessToken(req, res);
  console.log('accessToken', accessToken);
  console.log('client', api_client.defaults.baseURL);

  const res_api = await api_client.get('/valorations', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(res_api.data);
});
